import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import router from "./routes/router";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errorMiddleware";
import setupSocket from "./socket-server";
import rateLimit from "express-rate-limit";

const port: number | string = process.env.PORT || 5000;

const app: Express = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 15, // limit each IP to 100 requests per windowMs
});

setupSocket(app);

app.set("trust proxy", 1);

app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    if (req.originalUrl === "/webhook") {
      next();
    } else {
      express.json()(req, res, next);
      express.urlencoded({
        extended: true,
      });
    }
  }
);
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(router);
app.use(errorMiddleware);

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

if (process.env.DB_URL) {
  mongoose
    .connect(process.env.DB_URL, mongooseOptions)
    .then(() => {
      app.listen(process.env.DB_PORT, () => {
        console.log(`DB is running on port ${process.env.DB_PORT}`);
      });
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
    });
} else {
  console.error("DB_URL environment variable is not defined.");
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
