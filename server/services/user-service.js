const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const TokenModel = require("../models/Token");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const mailService = require("../services/mail-service");
class UserService {
  async registration(type, name, surname, email, password) {
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

    const tokens = tokenService.createTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
  async login(email, password) {
    const user = await UserModel.findOne({ email });

    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const userDto = new UserDto(user);
        const tokens = tokenService.createTokens({ ...userDto });

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
      }
      throw ApiError.BadRequest("Incorrect password");
    }
    throw ApiError.BadRequest("Incorrect email");
  }
  async logout(refreshToken) {
    return await tokenService.removeToken(refreshToken);
  }
  async changePassword(token, newPassword) {
    const user = await UserModel.findOne({ passwordResetToken: token });
    if (!user) {
      throw ApiError.BadRequest("Invalid or expired token");
    }
    user.password = await this.hashPassword(newPassword);
    user.passwordResetToken = null;
    await user.save();
  }
  async requestPasswordReset(email, token) {
    const user = await UserModel.findOneAndUpdate(
      { email },
      { passwordResetToken: token }
    );
    if (!user) {
      throw ApiError.BadRequest("Incorrect email");
    }
    await mailService.sendResetPasswordMail(
      email,
      `${process.env.CLIENT_URL}/reset-password/${token}`
    );
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = await tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.createTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getData() {
    return UserModel.find();
  }
  async deleteData() {
    await UserModel.collection.drop((err) => {
      if (err) {
        console.error("Error dropping collection:", err);
      } else {
        console.log("Collection dropped successfully");
      }
    });
    await TokenModel.collection.drop();
  }
  async hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt();
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new UserService();
