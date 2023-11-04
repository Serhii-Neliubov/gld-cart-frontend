"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var api_error_1 = require("../exceptions/api-error");
var token_service_1 = require("../services/token-service");
var requireAuth = function (req, res, next) {
    var authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        return next(api_error_1.default.UnauthorizedError());
    }
    var accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
        return next(api_error_1.default.UnauthorizedError());
    }
    var userData = token_service_1.default.validateAccessToken(accessToken);
    if (!userData) {
        return next(api_error_1.default.UnauthorizedError());
    }
    // req.user = userData;
    next();
};
exports.requireAuth = requireAuth;
