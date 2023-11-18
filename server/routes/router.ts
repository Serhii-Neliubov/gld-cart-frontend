import express, { Router } from "express";
import * as userController from "../controllers/userController";
import {rateLimitMiddlewareTyped} from "../middlewares/rateLimitMiddleware";
import * as paymentController from "../controllers/paymentController";
import * as authMiddleware from "../middlewares/authMiddleware";
const router:Router = Router();

// Auth routes
router.post("/signup", userController.signup_post);
router.post("/login", userController.login_post);
router.post("/logout", userController.logout_post);
router.get("/refresh", userController.refresh_get);

//GoogleAuth routes
router.get("/tokens/oauth/google", userController.googleOauthHandler);

// Reset password routes
router.post("/forgot-password", userController.initiate_password_reset);
router.post("/reset-password/:token", userController.reset_password);

//Email routes
router.post("/send-contact-email", rateLimitMiddlewareTyped, userController.send_contact_email);

//Payment routes
router.post("/create-checkout-session",authMiddleware.requireAuth ,paymentController.create_checkout);
router.post("/webhook",  express.raw({ type: "application/json" }), paymentController.create_order);
export default router;
