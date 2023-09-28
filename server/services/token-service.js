const TokenModel = require('../models/Token');
const jwt = require('jsonwebtoken');

class TokenService {
    createTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
        return { accessToken, refreshToken };
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await TokenModel.create({ user: userId, refreshToken });
        return token;
    }
    async removeToken(refreshToken) {
        const tokenData = await TokenModel.deleteOne({refreshToken});
        return tokenData;
    }
    async findToken(refreshToken) {
        return TokenModel.findOne({refreshToken});
    }
    validateAccessToken(accessToken) {
        try{
            return jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        }
        catch(e)
        {
            return null;
        }

    }
    validateRefreshToken(refreshToken) {
        try{
            return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        }
        catch(e)
        {
            return null;
        }

    }
}

module.exports = new TokenService();