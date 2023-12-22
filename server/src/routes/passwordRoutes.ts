import * as userController from "../controllers/userController";
import {Router} from "express";

export const passwordRoutes: Router = Router();

passwordRoutes.post("/forgot-password", userController.initiatePasswordReset);
passwordRoutes.post("/reset-password/:token", userController.resetPasswordWithToken);
passwordRoutes.post("/reset-password", userController.resetPasswordWithEmail);