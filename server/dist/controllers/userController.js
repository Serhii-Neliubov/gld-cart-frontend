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
exports.delete_all = exports.send_contact_email = exports.refresh_get = exports.reset_password = exports.initiate_password_reset = exports.logout_post = exports.login_post = exports.signup_post = void 0;
const mail_service_1 = __importDefault(require("../services/mail-service"));
const user_service_1 = __importDefault(require("../services/user-service"));
const token_service_1 = __importDefault(require("../services/token-service"));
const uuid_1 = __importDefault(require("uuid"));
const maxAge = 30 * 24 * 60 * 60 * 1000;
const signup_post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, name, surname, email, password } = req.body;
    try {
        const userData = yield user_service_1.default.registration(type, name, surname, email, password);
        res.cookie("refreshToken", userData.refreshToken, {
            httpOnly: true,
            maxAge: maxAge,
        });
        res.status(201).json(userData);
    }
    catch (error) {
        next(error);
    }
});
exports.signup_post = signup_post;
const login_post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userData = yield user_service_1.default.login(email, password);
        res.cookie("refreshToken", userData.refreshToken, {
            httpOnly: true,
            maxAge: maxAge,
        });
        res.status(201).json(userData);
    }
    catch (error) {
        next(error);
    }
});
exports.login_post = login_post;
const logout_post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refreshToken } = req.cookies;
        const token = yield user_service_1.default.logout(refreshToken);
        res.clearCookie("refreshToken");
        return res.json(token);
    }
    catch (e) {
        next(e);
    }
});
exports.logout_post = logout_post;
const initiate_password_reset = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const token = uuid_1.default.v4();
        yield user_service_1.default.requestPasswordReset(email, token);
        res
            .status(200)
            .json({ message: "Password reset link was sent to your email." });
    }
    catch (error) {
        next(error);
    }
});
exports.initiate_password_reset = initiate_password_reset;
const reset_password = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token: token } = req.params;
    const { newPassword } = req.body;
    try {
        yield user_service_1.default.changePassword(token, newPassword);
        res.status(200).json({ message: "Password was reset successfully." });
    }
    catch (error) {
        next(error);
    }
});
exports.reset_password = reset_password;
const refresh_get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refreshToken } = req.cookies;
        const userData = yield user_service_1.default.refresh(refreshToken);
        res.cookie("refreshToken", userData.refreshToken, {
            httpOnly: true,
            maxAge: maxAge,
        });
        return res.json(userData);
    }
    catch (e) {
        next(e);
    }
});
exports.refresh_get = refresh_get;
const send_contact_email = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, subject, message, token } = req.body;
    try {
        const userData = token ? token_service_1.default.validateAccessToken(token) : null;
        const recipientEmail = email || (userData === null || userData === void 0 ? void 0 : userData.email);
        if (recipientEmail) {
            yield mail_service_1.default.sendContactMail(name, recipientEmail, subject, message);
            return res.json({ success: true, message: "Email sent successfully" });
        }
        return res.status(400).json({ success: false, message: "Error. Email was not sent" });
    }
    catch (e) {
        next(e);
    }
});
exports.send_contact_email = send_contact_email;
const delete_all = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [userData] = yield Promise.all([
            user_service_1.default.deleteData(),
        ]);
        return res.json(userData);
    }
    catch (e) {
        next(e);
    }
});
exports.delete_all = delete_all;
