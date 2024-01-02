import bcrypt from "bcrypt";
import User, {IUser} from "../models/User";
import Token, {IToken} from "../models/Token";
import TokenService from "./tokenService";
import UserDto from "../dtos/user-dto";
import ApiError from "../exceptions/api-error";
import mailService from "./mailService";
import {IAddress} from "../models/Address";
import {Types} from "mongoose";
import {Logger} from "../util/logger";

class UserService {
    private logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    async registration(
        type: string,
        name: string,
        surname: string,
        email: string,
        password: string
    ) {
        const candidate = await User.findOne({email});
        if (candidate) {
            throw ApiError.BadRequest("That email is already registered");
        }
        const salt: string = await bcrypt.genSalt();
        const hashedPassword: string = await bcrypt.hash(password, salt);
        const user: IUser = <IUser>await User.create({
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
        const user: IUser = <IUser>await User.findOne({email});

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
        const user = <IUser>await User.findOne({passwordResetToken: token});
        if (!user) {
            throw ApiError.BadRequest("Invalid or expired token");
        }
        user.password = await this.hashPassword(newPassword);
        user.passwordResetToken = undefined;
        await user.save();
    }

    async changePasswordWithEmail(email: string, oldPassword: string, newPassword: string) {
        const user = <IUser>await User.findOne({email});
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
            await User.findOneAndUpdate({email}, {passwordResetToken: token})
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
            this.logger.logError('There is no refresh token');
            throw ApiError.UnauthorizedError();
        }
        const userData = TokenService.validateRefreshToken(refreshToken);
        const tokenFromDb: IToken | null =
            await TokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            this.logger.logError('Refresh token is invalid');
            throw ApiError.UnauthorizedError();
        }
        const user = <IUser>await User.findById(userData.id);
        const userDto: UserDto = new UserDto(user);
        const tokens: { accessToken: string; refreshToken: string } =
            TokenService.createTokens({...userDto});

        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    }

    async deleteData(): Promise<void> {
        try {
            await User.collection.drop();
            await Token.collection.drop();
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
        const existingUser = <IUser>await User.findOne({email: email});

        if (existingUser)
            return existingUser;

        const firstName = name.split(' ')[0];

        const newUser = <IUser>await User.create({
            type: type,
            name: firstName,
            surname: surname,
            email: email,
            picture: picture,
            password: password,
        });
        this.logger.logInfo(`New user created with email: ${email}`);
        return newUser;
    }

    async addAddress(userId: string, addressData: IAddress) {
        const user = await User.findById(userId);

        if (!user) {
            this.logger.logError(`User ${userId} not found while adding address`);
            throw ApiError.BadRequest("User not found");
        }

        const newAddressId = new Types.ObjectId();
        const addressWithId = {...addressData, id: newAddressId};

        user.addresses.push(addressWithId);
        await user.save();
        this.logger.logInfo(`Address added for user ${userId}`, user.addresses);
        return user;
    }

    async updateAddress(userId: string, addressId: Types.ObjectId, addressData: IAddress) {
        const user: IUser | null = await User.findById(userId);

        if (!user) {
            this.logger.logError(`User ${userId} was not found while updating address for email`);
            throw ApiError.BadRequest('User was not found');
        }
        const addressIndex = user.addresses.findIndex(address => String(address.id) === String(addressId));
        if (addressIndex === -1) {
            this.logger.logError(`Address was not found for user ${userId}`);
            throw ApiError.BadRequest('Address was not found');
        }
        Object.assign(user.addresses[addressIndex], addressData);
        await user.save();
        this.logger.logInfo(`Address was updated for user ${userId}`);
    }

    async getAddresses(id: string) {
        const user: IUser | null = await User.findById(id);
        if (!user) {
            this.logger.logError(`User not found while fetching addresses for ID: ${id}`);
            throw ApiError.BadRequest('User not found');
        }
        return user.addresses;
    }

    async deleteAddress(userId: string, addressId: Types.ObjectId) {
        const user = await User.findById(userId);
        if (!user) {
            this.logger.logError(`User ${userId} not found while deleting address for email`);
            throw ApiError.BadRequest("User not found");
        }

        const addressIndex = user.addresses.findIndex(address => String(address.id) === String(addressId));
        if (addressIndex === -1) {
            this.logger.logError(`Address not found for user ${userId}`);
            throw ApiError.BadRequest('Address not found');
        }

        user.addresses.splice(addressIndex, 1);
        await user.save();

        this.logger.logInfo(`Address deleted for user ${userId}`);
        return user;
    }

    async updatePersonalDetails(id: string | null, email: string | null, name: string | null, surname: string | null, phone_number: string | null, address: string | null, BIO: string | null) {
        const user = <IUser>(
            await User.findByIdAndUpdate(id, {
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