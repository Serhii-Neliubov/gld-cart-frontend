import dotenv from "dotenv";
dotenv.config();

export interface AppConfig {
    PORT: number | string;
    DB_URL?: string;
    CLIENT_URL?: string;
    DB_PORT?: number | string;
}

export const appConfig: AppConfig = {
    PORT: process.env.PORT || 5000,
    DB_URL: process.env.DB_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    DB_PORT: process.env.DB_PORT || 27017,
};