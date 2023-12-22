import express, {Express} from "express";
import cors from "cors";
import mongoose, {ConnectOptions} from "mongoose";
import router from "./router";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errorMiddleware";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import {appConfig} from "./config/appConfig";
import bodyParser from "body-parser";

export const app: Express = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 200,
}));
app.use('/webhook', bodyParser.raw({type: "*/*"}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cookieParser());
app.use(
    cors({
        origin: appConfig.CLIENT_URL,
        credentials: true,
    })
);
app.use(router);
app.use(errorMiddleware);
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions;

if (appConfig.DB_URL) {
    mongoose
        .connect(appConfig.DB_URL as string, mongooseOptions)
        .then(() => {
            app.listen(appConfig.DB_PORT, () => {
                console.log(`⚡️[database]: MongoDB is running on port ${appConfig.DB_PORT}`);
            });
        })
        .catch((error) => {
            console.error("Error connecting to the database:", error);
        });
} else {
    console.error("DB_URL environment variable is not defined.");
}