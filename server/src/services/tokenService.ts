import Token, {IToken} from "../models/Token";
import jwt                  from "jsonwebtoken";
import {Logger} from "../util/logger";

interface TokenPayload {
    id: string;
    type: string;
    name: string;
    surname: string;
    email: string;
    iat: number;
    exp: number;
}

class TokenService {
    private logger: Logger;
    constructor() {
        this.logger = new Logger();
    }
    createTokens(payload: {
        surname: string;
        name: string;
        id: string;
        type: string;
        email: string;
    }): {
        accessToken: string;
        refreshToken: string;
    } {
        const accessToken: string = jwt.sign(
            payload,
            process.env.JWT_ACCESS_SECRET!,
            {
                expiresIn: "15m",
            }
        );
        const refreshToken: string = jwt.sign(
            payload,
            process.env.JWT_REFRESH_SECRET!,
            {
                expiresIn: "30d",
            }
        );
        return {accessToken, refreshToken};
    }

    async saveToken(
        userId: string,
        refreshToken: string
    ): Promise<IToken | null> {
        const tokenData: IToken = <IToken>(
            await Token.findOne({user: userId})
        );
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await Token.create({user: userId, refreshToken});
    }

    async removeToken(refreshToken: string): Promise<{ deletedCount?: number }> {
        return Token.deleteOne({refreshToken});
    }

    async findToken(refreshToken: string): Promise<IToken | null> {
        return Token.findOne({refreshToken});
    }

    validateAccessToken(accessToken: string): TokenPayload | null {
        try {
            return jwt.verify(
                accessToken,
                process.env.JWT_ACCESS_SECRET!
            ) as TokenPayload;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(refreshToken: string): TokenPayload | null {
        try {
            return jwt.verify(
                refreshToken,
                process.env.JWT_REFRESH_SECRET!
            ) as TokenPayload;
        } catch (e) {
            return null;
        }
    }
}

export default new TokenService();
