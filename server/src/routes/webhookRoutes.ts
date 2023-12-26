import {handleStripeWebhook} from "../services/webhookService";
import {Router} from "express";

export const webhookRoutes: Router = Router();

webhookRoutes.post("/webhook", handleStripeWebhook);
