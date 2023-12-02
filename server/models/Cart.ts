import mongoose, { Document, Model, Schema } from 'mongoose';
import {IProduct, productSchema} from "./Product";

export interface ICart extends Document {
    user: mongoose.Types.ObjectId;
    products: IProduct[];
}
const cartSchema: Schema<ICart> = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [productSchema]
});
const Cart: Model<ICart> = mongoose.model('Cart', cartSchema) as Model<ICart>;
export default Cart;
