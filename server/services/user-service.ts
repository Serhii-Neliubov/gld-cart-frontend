import bcrypt from "bcrypt";
import UserModel, { IUser } from "../models/User";
import TokenModel, { IToken } from "../models/Token";
import TokenService from "./token-service";
import UserDto from "../dtos/user-dto";
import ApiError from "../exceptions/api-error";
import mailService from "./mail-service";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";

class UserService {
  async registration(
    type: string,
    name: string,
    surname: string,
    email: string,
    password: string
  ) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest("That email is already registered");
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await UserModel.create({
      type,
      name,
      surname,
      email,
      password: hashedPassword,
    });
    const userDto = new UserDto(user);

    const tokens = TokenService.createTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email: string, password: string) {
    const user = <IUser>await UserModel.findOne({ email });

    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const userDto = new UserDto(user);
        const tokens = TokenService.createTokens({ ...userDto });

        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
      }
      throw ApiError.BadRequest("Incorrect password");
    }
    throw ApiError.BadRequest("Incorrect email");
  }

  async logout(refreshToken: string) {
    return await TokenService.removeToken(refreshToken);
  }

  async changePassword(token: string, newPassword: string) {
    const user = <IUser>await UserModel.findOne({ passwordResetToken: token });
    if (!user) {
      throw ApiError.BadRequest("Invalid or expired token");
    }
    user.password = await this.hashPassword(newPassword);
    user.passwordResetToken = undefined;
    await user.save();
  }

  async requestPasswordReset(email: string, token: string) {
    const user = <IUser>(
      await UserModel.findOneAndUpdate({ email }, { passwordResetToken: token })
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
      throw ApiError.UnauthorizedError();
    }
    const userData = await TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = <IUser>await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = TokenService.createTokens({ ...userDto });

    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
  async deleteData() {
    try {
      await UserModel.collection.drop();
      await TokenModel.collection.drop();
    } catch (err) {
      console.error("Error dropping collection:", err);
    }
  }

  async hashPassword(password: string) {
    try {
      const salt: string = await bcrypt.genSalt();
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw error;
    }
  }
  async findAndUpdateUser( type, name, surname, email, picture, password
  ) {
    try {
      // return <IUser>UserModel.findOneAndUpdate(query, update, options);
      return await <IUser> UserModel.findOneAndUpdate({ email: email },
          {type: type, name: name, surname: surname, email: email, picture: picture, password: password},
          {upsert: true, new: true});
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserService();
