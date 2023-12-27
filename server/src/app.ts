import express, {Express} from "express";
import cors from "cors";
import mongoose, {ConnectOptions} from "mongoose";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errorMiddleware";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import {appConfig} from "./config/appConfig";
import bodyParser from "body-parser";
import {authRoutes} from "./routes/authRoutes";
import {passwordRoutes} from "./routes/passwordRoutes";
import {addressesRoutes} from "./routes/addressesRoutes";
import {emailRoutes} from "./routes/emailRoutes";
import {paymentRoutes} from "./routes/paymentRoutes";
import {personalDetailRoutes} from "./routes/personalDetailsRoutes";
import {vehicleRoutes} from "./routes/vehicleRoutes";
import {webhookRoutes} from "./routes/webhookRoutes";
import {subscriptionRoutes} from "./routes/subscriptionRoutes";
import {cartRoutes} from "./routes/cartRoutes";

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
app.use(authRoutes);
app.use(passwordRoutes);
app.use(addressesRoutes);
app.use(emailRoutes);
app.use(paymentRoutes);
app.use(personalDetailRoutes);
app.use(vehicleRoutes);
app.use(subscriptionRoutes);
app.use(webhookRoutes);
app.use(cartRoutes);

app.use(errorMiddleware);
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions;

if (!appConfig.DB_URL) {
    console.error("DB_URL environment variable is not defined.");
    process.exit(1);
}
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