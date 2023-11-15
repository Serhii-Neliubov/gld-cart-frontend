import {NextFunction, Request, Response} from "express";
import Stripe                            from "stripe";
import StoreService                      from "../services/store-service";

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

export const create_checkout = async (
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
export const create_order = async (
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

        console.log({...data});

        switch (eventType) {
            case "checkout.session.completed":
                try {
                    const customer = await stripe.customers.retrieve(
                        data.customer
                    )
                    await StoreService.createOrder(customer, data);
                } catch (err) {
                    console.log(err);
                }
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
        res.send();
    } catch (error) {
        console.log(error);
    }
};