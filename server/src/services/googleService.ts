import qs from "qs";
import axios from "axios";
import ApiError from "../exceptions/api-error";
import {Logger} from "../util/logger";

interface GoogleTokensResult {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    id_token: string;
}

interface GoogleUserResult {
    id: string;
    email: string;
    verified_email: boolean;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    locale: string;
}

export class GoogleOAuthService {
    private logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    async getGoogleOAuthTokens({code}: { code: string }) {
        const url: string = "https://oauth2.googleapis.com/token";

        const values = {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: "authorization_code",
        };

        try {
            const res = await axios.post<GoogleTokensResult>(
                url,
                qs.stringify(values),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            return res.data;
        } catch (error: any) {
            this.logger.logError("Failed to fetch Google OAuth Tokens", error.response?.data);
            throw new ApiError(403, "Failed to fetch Google OAuth Tokens", error);
        }
    }

    async getGoogleUser(id_token: string, access_token: string): Promise<GoogleUserResult> {
        try {
            const res = await axios.get<GoogleUserResult>(
                `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${id_token}`,
                    },
                }
            );
            return res.data;
        } catch (error: any) {
            this.logger.logError("Failed to fetch Google User", error.message);
            throw new Error(error.message);
        }
    }
}