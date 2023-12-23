import bcrypt from "bcrypt";
import UserModel, {IUser} from "../models/UserModel";
import TokenModel, {IToken} from "../models/TokenModel";
import TokenService from "./tokenService";
import UserDto from "../dtos/user-dto";
import ApiError from "../exceptions/api-error";
import mailService from "./mailService";
import {IAddress} from "../models/AddressModel";
import {Types} from "mongoose";
import {Logging} from "../util/logger";

class UserService {
    private logger: Logging;

    constructor() {
        this.logger = new Logging();
    }

    async registration(
        type: string,
        name: string,
        surname: string,
        email: string,
        password: string
    ) {
        const candidate = await UserModel.findOne({email});
        if (candidate) {
            throw ApiError.BadRequest("That email is already registered");
        }
        const salt: string = await bcrypt.genSalt();
        const hashedPassword: string = await bcrypt.hash(password, salt);
        const user: IUser = <IUser>await UserModel.create({
            type,
            name,
            surname,
            email,
            password: hashedPassword,
        });
        const userDto: UserDto = new UserDto(user);

        const tokens: { accessToken: string; refreshToken: string } =
            TokenService.createTokens({...userDto});
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        this.logger.logInfo(`User registered: ${email}`);

        return {...tokens, user: userDto};
    }

    async login(email: string, password: string) {
        const user: IUser = <IUser>await UserModel.findOne({email});

        if (user) {
            const auth: boolean = await bcrypt.compare(password, user.password);
            if (auth) {
                const userDto: UserDto = new UserDto(user);
                const tokens: { accessToken: string; refreshToken: string } =
                    TokenService.createTokens({...userDto});

                await TokenService.saveToken(userDto.id, tokens.refreshToken);
                this.logger.logInfo(`User logged in: ${email}`);
                return {...tokens, user: userDto};
            }
            this.logger.logError(`Incorrect password for ${email}`);
            throw ApiError.BadRequest("Incorrect password");
        }
        this.logger.logError(`User not found with email: ${email}`);
        throw ApiError.BadRequest("Incorrect email");
    }

    async logout(refreshToken: string) {
        this.logger.logInfo(`User logged out`);
        return await TokenService.removeToken(refreshToken);
    }

    async loginGoogleUser(
        code: string,
        customParameter: string,
        name: string,
        family_name: string,
        email: string,
        picture: string,
        password: string
    ) {
        const user = <IUser>(
            await this.findAndUpdateUser(
                customParameter,
                name,
                family_name,
                email,
                picture,
                password
            )
        );
        {
            const userDto: UserDto = new UserDto(user);
            const tokens: { accessToken: string; refreshToken: string } =
                TokenService.createTokens({...userDto});

            await TokenService.saveToken(userDto.id, tokens.refreshToken);
            this.logger.logInfo(`User logged in with Google: ${userDto.email}`);
            return {...tokens, user: userDto, picture: picture};
        }
    }

    async changePasswordWithToken(token: string, newPassword: string) {
        const user = <IUser>await UserModel.findOne({passwordResetToken: token});
        if (!user) {
            throw ApiError.BadRequest("Invalid or expired token");
        }
        user.password = await this.hashPassword(newPassword);
        user.passwordResetToken = undefined;
        await user.save();
    }

    async changePasswordWithEmail(email: string, oldPassword: string, newPassword: string) {
        const user = <IUser>await UserModel.findOne({email});
        if (user) {
            const auth: boolean = await bcrypt.compare(oldPassword, user.password);
            if (auth) {
                user.password = await this.hashPassword(newPassword);
                await user.save();
                return;
            }
            this.logger.logError(`Incorrect old password for email: ${email}`);
            throw ApiError.BadRequest("Incorrect old password");
        }
        this.logger.logError(`User not found with email: ${email}`);
        throw ApiError.BadRequest("Incorrect email");
    }

    async requestPasswordReset(email: string, token: string) {
        const user = <IUser>(
            await UserModel.findOneAndUpdate({email}, {passwordResetToken: token})
        );
        if (!user) {
            this.logger.logError(`User not found with email: ${email}`);
            throw ApiError.BadRequest("Incorrect email");
        }
        await mailService.sendResetPasswordMail(
            email,
            `${process.env.CLIENT_URL}/reset-password/${token}`
        );
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) {
            console.log("there is no refresh token");
            throw ApiError.UnauthorizedError();
        }
        const userData = TokenService.validateRefreshToken(refreshToken);
        const tokenFromDb: IToken | null =
            await TokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            this.logger.logError('Refresh token is invalid');
            throw ApiError.UnauthorizedError();
        }
        const user = <IUser>await UserModel.findById(userData.id);
        const userDto: UserDto = new UserDto(user);
        const tokens: { accessToken: string; refreshToken: string } =
            TokenService.createTokens({...userDto});

        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    }

    async deleteData(): Promise<void> {
        try {
            await UserModel.collection.drop();
            await TokenModel.collection.drop();
        } catch (err) {
            console.error("Error dropping collection:", err);
        }
    }

    async hashPassword(password: string): Promise<string> {
        try {
            const salt: string = await bcrypt.genSalt();
            return await bcrypt.hash(password, salt);
        } catch (error) {
            throw error;
        }
    }

    async findAndUpdateUser(
        type: string,
        name: string,
        surname: string,
        email: string,
        picture: string,
        password: string
    ): Promise<IUser> {
        const existingUser = <IUser>await UserModel.findOne({email: email});

        if (existingUser)
            return existingUser;

        const newUser = <IUser>await UserModel.create({
            type,
            name,
            surname,
            email,
            picture,
            password,
        });
        this.logger.logInfo(`New user created with email: ${email}`);
        return newUser;
    }

    async addAddress(email: string, addressData: IAddress) {
        const user = await UserModel.findOne({email});
        if (!user) {
            this.logger.logError(`User not found while adding address for email: ${email}`);
            throw ApiError.BadRequest("User not found");
        }

        const newAddressId = new Types.ObjectId();
        const addressWithId = {...addressData, id: newAddressId};

        user.addresses.push(addressWithId);
        await user.save();
        this.logger.logInfo(`Address added for user with email: ${email}`);
        return user;
    }

    async updateAddress(email: string, addressId: Types.ObjectId, updatedAddressData: IAddress) {
        const user: IUser | null = await UserModel.findOne({email});

        if (!user) {
            this.logger.logError(`User not found while updating address for email: ${email}`);
            throw ApiError.BadRequest('User not found');
        }
        const addressIndex = user.addresses.findIndex(address => String(address.id) === String(addressId));
        if (addressIndex === -1) {
            this.logger.logError(`Address not found for user with email: ${email}`);
            throw ApiError.BadRequest('Address not found');
        }
        Object.assign(user.addresses[addressIndex], updatedAddressData);
        await user.save();
        this.logger.logInfo(`Address updated for user with email: ${email}`);
    }

    async getAddresses(id: string) {
        const user: IUser | null = await UserModel.findById(id);

        if (!user) {
            this.logger.logError(`User not found while fetching addresses for ID: ${id}`);
            throw ApiError.BadRequest('User not found');
        }
        return user.addresses;
    }

    async updatePersonalDetails(id: string | null, email: string | null, name: string | null, surname: string | null, phone_number: string | null, address: string | null, BIO: string | null) {
        const user = <IUser>(
            await UserModel.findByIdAndUpdate(id, {
                name: name,
                surname: surname,
                email: email,
                phone_number: phone_number,
                address: address,
                BIO: BIO
            })
        );
        if (!user) {
            this.logger.logError(`User not found while updating details for ID: ${id}`);
            throw ApiError.BadRequest("User not found");
        }
        await user.save();
        this.logger.logInfo(`Personal details updated for user with ID: ${id}`);
    }
}

export default new UserService();