import * as authMiddleware from "../middlewares/authMiddleware";
import * as subscriptionController from "../controllers/subscriptionController";

import {Router} from "express";

export const subscriptionRoutes: Router = Router();

subscriptionRoutes.post("/create-subscription-checkout", authMiddleware.requireAuth, subscriptionController.createSubscriptionCheckout);
subscriptionRoutes.post("/cancel-subscription", authMiddleware.requireAuth, subscriptionController.cancelSubscription);