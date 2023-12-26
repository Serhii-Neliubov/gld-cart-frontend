import {Logger} from "../util/logger";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-08-16",
    typescript: true,
});

class SubscriptionService {
    private logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    async createSubscriptionCheckout(userId: string, lookupKey: string): Promise<string | null> {
        try {
            await stripe.customers.create({
                metadata: {
                    userId: userId,
                },
            });

            const prices = await stripe.prices.list({
                lookup_keys: [lookupKey],
                expand: ['data.product'],
            });

            const session = await stripe.checkout.sessions.create({
                billing_address_collection: 'auto',
                line_items: [
                    {
                        price: prices.data[0].id,
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                success_url: `${process.env.CLIENT_URL}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
            });

            this.logger.logInfo(`Subscription checkout session created: ${session.id}`);

            return session.url;
        } catch (error: any) {
            this.logger.logError('Failed to create subscription checkout session', error);
            throw error;
        }
    }

    async cancelSubscription(subscriptionId: string): Promise<any> {
        try {
            // @ts-ignore
            const deletedSubscription = await stripe.subscriptions.del(subscriptionId);

            this.logger.logInfo(`Subscription cancelled: ${subscriptionId}`);

            return deletedSubscription;
        } catch (error: any) {
            this.logger.logError('Failed to cancel subscription', error);
            throw error;
        }
    }
}

export default new SubscriptionService();