import {rateLimitMiddlewareTyped} from "../middlewares/rateLimitMiddleware";
import * as userController from "../controllers/userController";
import {Router} from "express";

export const emailRoutes: Router = Router();

emailRoutes.post("/send-contact-email", rateLimitMiddlewareTyped, userController.sendContactEmail);
