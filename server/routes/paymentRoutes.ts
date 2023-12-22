import * as authMiddleware from "../middlewares/authMiddleware";
import * as paymentController from "../controllers/paymentController";
import {Router} from "express";

export const paymentRoutes: Router = Router();

paymentRoutes.post("/create-checkout-session", authMiddleware.requireAuth, paymentController.createPaymentCheckout);
paymentRoutes.post("/create-subscription-checkout", authMiddleware.requireAuth, paymentController.createSubscriptionCheckout);
paymentRoutes.post("/cancel-subscription", authMiddleware.requireAuth, paymentController.cancelSubscription);
paymentRoutes.get("/get-customer", authMiddleware.requireAuth, paymentController.createCustomer);
paymentRoutes.post("/webhook", paymentController.handleStripeWebhook);
