import Order        from "../models/Order";
import {IOrderData} from "../types/types";
class StoreService {

    async createOrder(customer, data: IOrderData) {
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

}

export default new StoreService();