import * as userController from "../controllers/userController";
import {Router} from "express";

export const authRoutes: Router = Router();

authRoutes.post("/signup", userController.signup);

authRoutes.post("/login", userController.login);

authRoutes.post("/logout", userController.logout);

authRoutes.get("/refresh", userController.refresh);

authRoutes.get("/tokens/oauth/google", userController.googleOauthHandler);
