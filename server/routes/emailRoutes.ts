import * as authMiddleware from "../middlewares/authMiddleware";
import {rateLimitMiddlewareTyped} from "../middlewares/rateLimitMiddleware";
import * as userController from "../controllers/userController";
import router from "./router";

router.post("/send-contact-email", authMiddleware.requireAuth, rateLimitMiddlewareTyped, userController.sendContactEmail);
