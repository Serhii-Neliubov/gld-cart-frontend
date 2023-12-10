import express, {Router}          from "express";
import * as userController        from "../controllers/userController";
import {rateLimitMiddlewareTyped} from "../middlewares/rateLimitMiddleware";
import * as paymentController     from "../controllers/paymentController";
import * as authMiddleware        from "../middlewares/authMiddleware";
import * as storeController from "../controllers/storeController";
import * as vehicleController from "../controllers/vehicleController";

const router: Router = Router();

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
router.post("/create-checkout-session", authMiddleware.requireAuth, paymentController.create_checkout);
router.post("/create-subscription", authMiddleware.requireAuth, paymentController.create_subscription);
router.post("/cancel-subscription", authMiddleware.requireAuth, paymentController.cancel_subscription);
router.get("/get-customer", authMiddleware.requireAuth, paymentController.create_customer);
router.post("/webhook", express.raw({type: "application/json"}), paymentController.create_order);

//Basic product routes
router.post("/create-product", authMiddleware.requireAuth, storeController.create_product);
router.post("/update-product", authMiddleware.requireAuth, storeController.update_product);
router.post("/delete_product", authMiddleware.requireAuth, storeController.delete_product);
router.get("/get_product", authMiddleware.requireAuth, storeController.get_product);

//Vehicle routes
router.post('/vehicles', vehicleController.createVehicle);
router.get('/vehicles/:id', vehicleController.getVehicleById);
router.put('/vehicles/:id', vehicleController.updateVehicle);
router.delete('/vehicles/:id', vehicleController.deleteVehicle);

export default router;
