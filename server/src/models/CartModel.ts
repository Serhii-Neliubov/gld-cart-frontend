import mongoose, {Document, Model, Schema} from 'mongoose';
import {IProduct, productSchema} from "./products/ProductModel";

export interface ICart extends Document {
    user: mongoose.Types.ObjectId;
    items: IProduct[];
    totalPrice: number;
}

const cartSchema: Schema<ICart> = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    items: [productSchema],
    totalPrice: {type: Number, required: true},
});
const CartModel: Model<ICart> = mongoose.model('Cart', cartSchema) as Model<ICart>;
export default CartModel;
