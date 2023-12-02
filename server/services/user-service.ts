import bcrypt from "bcrypt";
import UserModel, {IUser} from "../models/User";
import TokenModel, {IToken} from "../models/Token";
import TokenService from "./token-service";
import UserDto from "../dtos/user-dto";
import ApiError from "../exceptions/api-error";
import mailService from "./mail-service";

class UserService {
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
                return {...tokens, user: userDto};
            }
            throw ApiError.BadRequest("Incorrect password");
        }
        throw ApiError.BadRequest("Incorrect email");
    }

    async logout(refreshToken: string) {
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
            console.log(userDto);

            const tokens: { accessToken: string; refreshToken: string } =
                TokenService.createTokens({...userDto});

            await TokenService.saveToken(userDto.id, tokens.refreshToken);
            return {...tokens, user: userDto, picture: picture};
        }
    }

    async changePassword(token: string, newPassword: string) {
        const user = <IUser>await UserModel.findOne({passwordResetToken: token});
        if (!user) {
            throw ApiError.BadRequest("Invalid or expired token");
        }
        user.password = await this.hashPassword(newPassword);
        user.passwordResetToken = undefined;
        await user.save();
    }

    async requestPasswordReset(email: string, token: string) {
        const user = <IUser>(
            await UserModel.findOneAndUpdate({email}, {passwordResetToken: token})
        );
        if (!user) {
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
            console.log(tokenFromDb);
            console.log("refresh token is invalid");
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

        return <IUser>await UserModel.create({
            type: type,
            name: name,
            surname: surname,
            email: email,
            picture: picture,
            password: password,
        });
    }
}

export default new UserService();
