import mongoose, { Document, Model, Schema } from 'mongoose';
import {IProduct, productSchema} from "./products/ProductModel";

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
const CartModel: Model<ICart> = mongoose.model('carts', cartSchema) as Model<ICart>;
export default CartModel;
