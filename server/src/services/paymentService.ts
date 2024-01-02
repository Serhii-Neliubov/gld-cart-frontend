import {Logger} from "../util/logger";

import Stripe from "stripe";
import {IProduct} from "../models/Product";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-08-16",
    typescript: true,
});
interface ICheckoutRequestBody {
    userId: string;
    cartItems: IProduct[];
}

class PaymentService {
    private logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    async createCustomer(email: string, name: string): Promise<string> {
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

            this.logger.logInfo(`Customer created: ${customer.id}`);

            return customer.id;
        } catch (error: any) {
            this.logger.logError('Failed to create customer', error);
            throw error;
        }
    }
    async createPaymentCheckout(requestBody: ICheckoutRequestBody): Promise<string | null> {
        try {
            const customer = await stripe.customers.create({
                metadata: {
                    userId: requestBody.userId,
                    cart: JSON.stringify(requestBody.cartItems),
                },
            });

            const line_items = requestBody.cartItems.map((item: IProduct) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.title,
                        images: [item.imageURL],
                        description: item.description,
                        // metadata: {
                        //     id: item.productId,
                        // },
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            }));

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

            this.logger.logInfo(`Checkout session created: ${session.id}`);

            return session.url;
        } catch (error: any) {
            this.logger.logError('Failed to create checkout session', error);
            throw error;
        }
    }
}
export default new PaymentService();