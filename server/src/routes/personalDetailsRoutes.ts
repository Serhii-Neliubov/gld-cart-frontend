import * as authMiddleware from "../middlewares/authMiddleware";
import * as userController from "../controllers/userController";
import {Router} from "express";

export const personalDetailRoutes: Router = Router();

personalDetailRoutes.put("/update-personal-details", authMiddleware.requireAuth, userController.updatePersonalDetails);
