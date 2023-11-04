"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_1 = __importDefault(require("../exceptions/api-error"));
function errorHandler(err, req, res, next) {
    console.log(err);
    if (err instanceof api_error_1.default) {
        const apiError = err;
        return res.status(apiError.status).json({
            message: apiError.message,
            errors: apiError.errors,
        });
    }
    return res.status(500).json({ message: 'Undefined server error' });
}
exports.default = errorHandler;
