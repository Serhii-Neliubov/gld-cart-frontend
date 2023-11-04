"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
var User_1 = require("../models/User");
var Token_1 = require("../models/Token");
var token_service_1 = require("./token-service");
var user_dto_1 = require("../dtos/user-dto");
var api_error_1 = require("../exceptions/api-error");
var mail_service_1 = require("./mail-service");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.registration = function (type, name, surname, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var candidate, salt, hashedPassword, user, userDto, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 1:
                        candidate = _a.sent();
                        if (candidate) {
                            throw api_error_1.default.BadRequest("That email is already registered");
                        }
                        return [4 /*yield*/, bcrypt_1.default.genSalt()];
                    case 2:
                        salt = _a.sent();
                        return [4 /*yield*/, bcrypt_1.default.hash(password, salt)];
                    case 3:
                        hashedPassword = _a.sent();
                        return [4 /*yield*/, User_1.default.create({
                                type: type,
                                name: name,
                                surname: surname,
                                email: email,
                                password: hashedPassword,
                            })];
                    case 4:
                        user = _a.sent();
                        userDto = new user_dto_1.default(user);
                        tokens = token_service_1.default.createTokens(__assign({}, userDto));
                        return [4 /*yield*/, token_service_1.default.saveToken(userDto.id, tokens.refreshToken)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tokens), { user: userDto })];
                }
            });
        });
    };
    UserService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, auth, userDto, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 5];
                        return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
                    case 2:
                        auth = _a.sent();
                        if (!auth) return [3 /*break*/, 4];
                        userDto = new user_dto_1.default(user);
                        tokens = token_service_1.default.createTokens(__assign({}, userDto));
                        return [4 /*yield*/, token_service_1.default.saveToken(userDto.id, tokens.refreshToken)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tokens), { user: userDto })];
                    case 4: throw api_error_1.default.BadRequest("Incorrect password");
                    case 5: throw api_error_1.default.BadRequest("Incorrect email");
                }
            });
        });
    };
    UserService.prototype.logout = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, token_service_1.default.removeToken(refreshToken)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.changePassword = function (token, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, User_1.default.findOne({ passwordResetToken: token })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw api_error_1.default.BadRequest("Invalid or expired token");
                        }
                        _a = user;
                        return [4 /*yield*/, this.hashPassword(newPassword)];
                    case 2:
                        _a.password = _b.sent();
                        user.passwordResetToken = undefined;
                        return [4 /*yield*/, user.save()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.requestPasswordReset = function (email, token) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.findOneAndUpdate({ email: email }, { passwordResetToken: token })];
                    case 1:
                        user = (_a.sent());
                        if (!user) {
                            throw api_error_1.default.BadRequest("Incorrect email");
                        }
                        return [4 /*yield*/, mail_service_1.default.sendResetPasswordMail(email, "".concat(process.env.CLIENT_URL, "/reset-password/").concat(token))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.refresh = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            var userData, tokenFromDb, user, userDto, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!refreshToken) {
                            throw api_error_1.default.UnauthorizedError();
                        }
                        return [4 /*yield*/, token_service_1.default.validateRefreshToken(refreshToken)];
                    case 1:
                        userData = _a.sent();
                        return [4 /*yield*/, token_service_1.default.findToken(refreshToken)];
                    case 2:
                        tokenFromDb = _a.sent();
                        if (!userData || !tokenFromDb) {
                            throw api_error_1.default.UnauthorizedError();
                        }
                        return [4 /*yield*/, User_1.default.findById(userData.userId)];
                    case 3:
                        user = _a.sent();
                        userDto = new user_dto_1.default(user);
                        tokens = token_service_1.default.createTokens(__assign({}, userDto));
                        return [4 /*yield*/, token_service_1.default.saveToken(userDto.id, tokens.refreshToken)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tokens), { user: userDto })];
                }
            });
        });
    };
    UserService.prototype.deleteData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, User_1.default.collection.drop()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Token_1.default.collection.drop()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error("Error dropping collection:", err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.hashPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var salt, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, bcrypt_1.default.genSalt()];
                    case 1:
                        salt = _a.sent();
                        return [4 /*yield*/, bcrypt_1.default.hash(password, salt)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserService;
}());
exports.default = new UserService();
