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
exports.delete_all = exports.send_contact_email = exports.refresh_get = exports.reset_password = exports.initiate_password_reset = exports.logout_post = exports.login_post = exports.signup_post = void 0;
var mail_service_1 = require("../services/mail-service");
var user_service_1 = require("../services/user-service");
var uuid_1 = require("uuid");
var maxAge = 30 * 24 * 60 * 60 * 1000;
var signup_post = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, name, surname, email, password, userData, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, type = _a.type, name = _a.name, surname = _a.surname, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_service_1.default.registration(type, name, surname, email, password)];
            case 2:
                userData = _b.sent();
                res.cookie("refreshToken", userData.refreshToken, {
                    httpOnly: true,
                    maxAge: maxAge,
                });
                res.status(201).json(userData);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.signup_post = signup_post;
var login_post = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userData, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_service_1.default.login(email, password)];
            case 2:
                userData = _b.sent();
                res.cookie("refreshToken", userData.refreshToken, {
                    httpOnly: true,
                    maxAge: maxAge,
                });
                res.status(201).json(userData);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                next(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login_post = login_post;
var logout_post = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var refreshToken, token, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                refreshToken = req.cookies.refreshToken;
                return [4 /*yield*/, user_service_1.default.logout(refreshToken)];
            case 1:
                token = _a.sent();
                res.clearCookie("refreshToken");
                return [2 /*return*/, res.json(token)];
            case 2:
                e_1 = _a.sent();
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logout_post = logout_post;
var initiate_password_reset = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var email, token, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.body.email;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                token = uuid_1.default.v4();
                return [4 /*yield*/, user_service_1.default.requestPasswordReset(email, token)];
            case 2:
                _a.sent();
                res
                    .status(200)
                    .json({ message: "Password reset link was sent to your email." });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.initiate_password_reset = initiate_password_reset;
var reset_password = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, newPassword, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                token = req.params.token;
                console.log(token);
                newPassword = req.body.newPassword;
                console.log(newPassword);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_service_1.default.changePassword(token, newPassword)];
            case 2:
                _a.sent();
                res.status(200).json({ message: "Password was reset successfully." });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.reset_password = reset_password;
var refresh_get = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var refreshToken, userData, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                refreshToken = req.cookies.refreshToken;
                return [4 /*yield*/, user_service_1.default.refresh(refreshToken)];
            case 1:
                userData = _a.sent();
                res.cookie("refreshToken", userData.refreshToken, {
                    httpOnly: true,
                    maxAge: maxAge,
                });
                return [2 /*return*/, res.json(userData)];
            case 2:
                e_2 = _a.sent();
                next(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.refresh_get = refresh_get;
var send_contact_email = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, subject, message, to, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, subject = _a.subject, message = _a.message, to = _a.to;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mail_service_1.default.sendContactMail(name, email, subject, message, to)];
            case 2:
                _b.sent();
                res
                    .status(200)
                    .json({ success: true, message: "Email was sent successfully" });
                return [3 /*break*/, 4];
            case 3:
                e_3 = _b.sent();
                next(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.send_contact_email = send_contact_email;
var delete_all = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Promise.all([
                        user_service_1.default.deleteData(),
                    ])];
            case 1:
                userData = (_a.sent())[0];
                return [2 /*return*/, res.json(userData)];
            case 2:
                e_4 = _a.sent();
                next(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.delete_all = delete_all;
