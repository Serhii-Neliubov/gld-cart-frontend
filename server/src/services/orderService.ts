import OrderModel from "../models/OrderModel";
import Stripe from "stripe";
import {IProduct} from "../models/products/ProductModel";

class OrderService {
    async createOrder(customer: Stripe.Customer | Stripe.DeletedCustomer, data: Stripe.Event.Data.Object) {
        if ("metadata" in customer &&
            "customer" in data &&
            "payment_intent" in data &&
            "amount_subtotal" in data &&
            "amount_total" in data &&
            "customer_details" in data &&
            "payment_status" in data) {

            const Items = JSON.parse(customer.metadata.cart) as IProduct[];
            console.log(Items);
            try {
                const newOrder = new OrderModel({
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
                console.log("Processed OrderModel:", savedOrder);
            } catch (err) {
                console.log(err);
            }
        }
    }
    // async createProduct(name: string, brand: string, desc: string, price: number, image: string, cartQuantity: number) {
    //     return <IProduct>await ProductModel.create({title: name, brand, desc, price, image, cartQuantity});
    // }
}

export default new OrderService();