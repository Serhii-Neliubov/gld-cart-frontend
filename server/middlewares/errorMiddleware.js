"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_error_1 = require("../exceptions/api-error");
function errorHandler(err, req, res, next) {
    console.log(err);
    if (err instanceof api_error_1.default) {
        var apiError = err;
        return res.status(apiError.status).json({
            message: apiError.message,
            errors: apiError.errors,
        });
    }
    return res.status(500).json({ message: 'Undefined server error' });
}
exports.default = errorHandler;
