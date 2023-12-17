import {NextFunction, Request, Response} from "express";
import Stripe from "stripe";
import StoreService from "../services/order-service";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-08-16",
    typescript: true,
});

interface ICheckoutRequestBody {
    userId: string;
    cartItems: IItem[];
}

interface IItem {
    name: any;
    image: any;
    desc: any;
    id: any;
    price: number;
    cartQuantity: any;
}

export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const name = req.body.name;
    try {
        const customer = await stripe.customers.create({
            email: `${email}`,
            name: `${name}`,
            shipping: {
                address: {
                    city: 'Brothers',
                    country: 'US',
                    line1: '27 Fredrick Ave',
                    postal_code: '97712',
                    state: 'CA',
                },
                name: `${name}`,
            },
            address: {
                city: 'Brothers',
                country: 'US',
                line1: '27 Fredrick Ave',
                postal_code: '97712',
                state: 'CA',
            },
        });
        res.send(customer.id);
    } catch (error) {
        next(error);
    }
};
export const createPaymentCheckout = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const requestBody = <ICheckoutRequestBody>req.body;
    try {
        const customer = await stripe.customers.create({
            metadata: {
                userId: requestBody.userId,
                cart: JSON.stringify(requestBody.cartItems),
            },
        });
        const line_items = requestBody.cartItems.map((item: IItem) => {
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                        images: [item.image],
                        description: item.desc,
                        metadata: {
                            id: item.id,
                        },
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.cartQuantity,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            shipping_address_collection: {
                allowed_countries: ["US", "UA", "SK"],
            },
            phone_number_collection: {
                enabled: true,
            },
            customer: customer.id,
            line_items,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/checkout-success`,
            cancel_url: `${process.env.CLIENT_URL}/checkout-failed`,
        });
        res.redirect(<string>session.url);
        // res.send({url: session.url});
    } catch (error) {
        next(error);
    }
};
export const createSubscriptionCheckout = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {

    const userId = req.body.userId;
    const lookupKey = req.body.lookup_key;

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
        res.redirect(<string>session.url);
        // res.send({url: session.url});
    } catch (error) {
        next(error);
    }
}
export const cancelSubscription = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        // @ts-ignore
        const deletedSubscription = await stripe.subscriptions.del(
            req.body.subscriptionId
        );
        res.send(deletedSubscription);
    } catch (error) {
        next(error);
    }
}
export const handleStripeWebhook = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            let event: Stripe.Event;
            const signature = req.headers["stripe-signature"] as string | Buffer | string[];

            try {
                event = stripe.webhooks.constructEvent(
                    req.body,
                    signature,
                    <string>process.env.STRIPE_WEBHOOK_SECRET
                );
            } catch (err) {
                console.log(`⚠️  Webhook signature verification failed.`);
                res.sendStatus(400);
                return;
            }
            const data = event.data.object;
            const eventType: string = event.type;

            switch (eventType) {
                // case 'customer.subscription.trial_will_end':
                //     subscription = event.data.object;
                //     status = subscription.status;
                //     console.log(`Subscription status is ${status}.`);
                //     // Then define and call a method to handle the subscription trial ending.
                //     // handleSubscriptionTrialEnding(subscription);
                //     break;
                // case 'customer.subscription.deleted':
                //     subscription = event.data.object;
                //     status = subscription.status;
                //     console.log(`Subscription status is ${status}.`);
                //     // Then define and call a method to handle the subscription deleted.
                //     // handleSubscriptionDeleted(subscriptionDeleted);
                //     break;
                // case 'customer.subscription.created':
                //     subscription = event.data.object;
                //     status = subscription.status;
                //     console.log(`Subscription status is ${status}.`);
                //     // Then define and call a method to handle the subscription created.
                //     // handleSubscriptionCreated(subscription);
                //     break;
                // case 'customer.subscription.updated':
                //     subscription = event.data.object;
                //     status = subscription.status;
                //     console.log(`Subscription status is ${status}.`);
                //     // Then define and call a method to handle the subscription update.
                //     // handleSubscriptionUpdated(subscription);
                case "checkout.session.completed":
                    try {
                        const customer = await stripe.customers.retrieve(
                            (data as { customer: string }).customer
                        );
                        await StoreService.createOrder(customer, data);
                    } catch (err) {
                        console.log(err);
                    }
                    break;
                default:
                    console.log(`Unhandled event type ${event.type}`);
            }
            res.send();
        } catch
            (error) {
            console.log(error);
        }
    }
;