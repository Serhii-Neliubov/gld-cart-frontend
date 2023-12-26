import Stripe from "stripe";
import {Logger} from "../util/logger";
import {Request, Response} from "express";
import OrderService from "./orderService";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-08-16",
    typescript: true,
});
const logger = new Logger();
export const handleStripeWebhook = async (req: Request, res: Response) => {
    try {
        let event: Stripe.Event;
        const signature = req.headers['stripe-signature'] as string | string[] | Buffer;

        try {
            event = stripe.webhooks.constructEvent(
                req.body,
                signature,
                <string>process.env.STRIPE_WEBHOOK_SECRET
            );
        } catch (error: any) {
            logger.logError('Webhook signature verification failed', error);
            res.sendStatus(400);
            return;
        }

        const data = event.data.object;
        const eventType: string = event.type;

        switch (eventType) {
            case 'checkout.session.completed':
                try {
                    const customer = await stripe.customers.retrieve((data as { customer: string }).customer);
                    await OrderService.createOrder(customer, data);
                } catch (error: any) {
                    logger.logError('Error handling checkout session completion', error);
                }
                break;
            default:
                logger.logInfo(`Unhandled event type ${event.type}`);
        }
        res.send();
    } catch (error: any) {
        logger.logError('Error handling webhook event', error);
        res.status(500).send('Internal Server Error');
    }
}