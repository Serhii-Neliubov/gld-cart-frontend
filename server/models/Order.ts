import mongoose, { Document, Model, Schema } from "mongoose";
import {IProduct}                   from "./Product";

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  products: IProduct[];
  subtotal: number;
  total: number;
  shipping?: object;
  delivery_status: string;
  payment_status: string;
}
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: String, required: true },
  price: { type: Number, required: true },
  cartQuantity: { type: Number, required: true },
});

const orderSchema: Schema<IOrder> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', },
    products: [productSchema],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: Object},
    delivery_status: { type: String, default: 'pending' },
    payment_status: { type: String, required: true },
  },
);

const Order: Model<IOrder> = mongoose.model('Order', orderSchema) as Model<IOrder>;

export default Order;