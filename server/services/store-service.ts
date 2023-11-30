import Order from "../models/Order";

class StoreService {
    async createOrder(customer: Stripe.Customer | Stripe.DeletedCustomer, data: Stripe.Event.Data.Object) {
        if ("metadata" in customer &&
            "customer" in data &&
            "payment_intent" in data &&
            "amount_subtotal" in data &&
            "amount_total" in data &&
            "customer_details" in data &&
            "payment_status" in data) {

    async createOrder(customer, data) {
        const Items = JSON.parse(customer.metadata.cart);
        try {
            const newOrder = new Order({
                userId: customer.metadata.userId,
                customerId: data.customer,
                paymentIntentId: data.payment_intent,
                products: Items,
                subtotal: data.amount_subtotal,
                total: data.amount_total,
                shipping: data.customer_details,
                payment_status: data.payment_status,
            });
            const savedOrder = await newOrder.save();
            console.log("Processed Order:", savedOrder);
        } catch (err) {
            console.log(err);
        }
    };

            const Items = JSON.parse(customer.metadata.cart) as IProduct[];
            console.log(Items);
            try {
                const newOrder = new Order({
                    userId: customer.metadata.userId,
                    customerId: data.customer,
                    paymentIntentId: data.payment_intent,
                    products: Items,
                    subtotal: data.amount_subtotal,
                    total: data.amount_total,
                    shipping: data.customer_details,
                    payment_status: data.payment_status,
                });
                const savedOrder = await newOrder.save();
                console.log("Processed Order:", savedOrder);
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default new StoreService();