import mongoose, {Document, Model, Schema} from "mongoose";
import {IProduct, productSchema} from "./products/ProductModel";

export interface IOrder extends Document {
    user: mongoose.Types.ObjectId;
    products: IProduct[];
    subtotal: number;
    total: number;
    shipping?: object;
    delivery_status: string;
    payment_status: string;
}

const orderSchema: Schema<IOrder> = new Schema(
    {
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        products: [productSchema],
        subtotal: {type: Number, required: true},
        total: {type: Number, required: true},
        shipping: {type: Object},
        delivery_status: {type: String, default: 'pending'},
        payment_status: {type: String, required: true},
    },
);

const OrderModel  = mongoose.model('Order', orderSchema) as Model<IOrder>;

export default OrderModel;