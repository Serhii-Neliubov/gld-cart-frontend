const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const TokenModel = require("../models/Token");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
class UserService {
  async registration(type, name, surname, email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest("That email is already registered");
    }
    const user = await UserModel.create({
      type,
      name,
      surname,
      email,
      password,
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
  async changePassword(id, password, newPassword) {
    const user = await UserModel.findById(id);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw ApiError.BadRequest("Incorrect old password");
    }
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    const userDto = new UserDto(user);

    return { user: userDto };
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
}
module.exports = new UserService();
