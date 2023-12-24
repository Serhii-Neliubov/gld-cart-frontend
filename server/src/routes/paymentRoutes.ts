import * as authMiddleware from "../middlewares/authMiddleware";
import * as paymentController from "../controllers/paymentController";
import {Router} from "express";

export const paymentRoutes: Router = Router();

paymentRoutes.post("/create-checkout-session", authMiddleware.requireAuth, paymentController.createPaymentCheckout);
paymentRoutes.get("/get-customer", authMiddleware.requireAuth, paymentController.createCustomer);
