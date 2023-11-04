"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const Token_1 = __importDefault(require("../models/Token"));
const token_service_1 = __importDefault(require("./token-service"));
const user_dto_1 = __importDefault(require("../dtos/user-dto"));
const api_error_1 = __importDefault(require("../exceptions/api-error"));
const mail_service_1 = __importDefault(require("./mail-service"));
class UserService {
    registration(type, name, surname, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidate = yield User_1.default.findOne({ email });
            if (candidate) {
                throw api_error_1.default.BadRequest("That email is already registered");
            }
            const salt = yield bcrypt_1.default.genSalt();
            const hashedPassword = yield bcrypt_1.default.hash(password, salt);
            const user = yield User_1.default.create({
                type,
                name,
                surname,
                email,
                password: hashedPassword,
            });
            const userDto = new user_dto_1.default(user);
            const tokens = token_service_1.default.createTokens(Object.assign({}, userDto));
            yield token_service_1.default.saveToken(userDto.id, tokens.refreshToken);
            return Object.assign(Object.assign({}, tokens), { user: userDto });
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ email });
            if (user) {
                const auth = yield bcrypt_1.default.compare(password, user.password);
                if (auth) {
                    const userDto = new user_dto_1.default(user);
                    const tokens = token_service_1.default.createTokens(Object.assign({}, userDto));
                    yield token_service_1.default.saveToken(userDto.id, tokens.refreshToken);
                    return Object.assign(Object.assign({}, tokens), { user: userDto });
                }
                throw api_error_1.default.BadRequest("Incorrect password");
            }
            throw api_error_1.default.BadRequest("Incorrect email");
        });
    }
    logout(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_service_1.default.removeToken(refreshToken);
        });
    }
    changePassword(token, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ passwordResetToken: token });
            if (!user) {
                throw api_error_1.default.BadRequest("Invalid or expired token");
            }
            user.password = yield this.hashPassword(newPassword);
            user.passwordResetToken = undefined;
            yield user.save();
        });
    }
    requestPasswordReset(email, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield User_1.default.findOneAndUpdate({ email }, { passwordResetToken: token }));
            if (!user) {
                throw api_error_1.default.BadRequest("Incorrect email");
            }
            yield mail_service_1.default.sendResetPasswordMail(email, `${process.env.CLIENT_URL}/reset-password/${token}`);
        });
    }
    refresh(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken) {
                throw api_error_1.default.UnauthorizedError();
            }
            const userData = yield token_service_1.default.validateRefreshToken(refreshToken);
            const tokenFromDb = yield token_service_1.default.findToken(refreshToken);
            if (!userData || !tokenFromDb) {
                throw api_error_1.default.UnauthorizedError();
            }
            const user = yield User_1.default.findById(userData.id);
            const userDto = new user_dto_1.default(user);
            const tokens = token_service_1.default.createTokens(Object.assign({}, userDto));
            yield token_service_1.default.saveToken(userDto.id, tokens.refreshToken);
            return Object.assign(Object.assign({}, tokens), { user: userDto });
        });
    }
    deleteData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.collection.drop();
                yield Token_1.default.collection.drop();
            }
            catch (err) {
                console.error("Error dropping collection:", err);
            }
        });
    }
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const salt = yield bcrypt_1.default.genSalt();
                return yield bcrypt_1.default.hash(password, salt);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = new UserService();
