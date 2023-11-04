
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ICart extends Document {
    user: mongoose.Types.ObjectId;
    refreshToken: string;
}

const cartSchema: Schema<ICart> = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        required: true,
    },
});
const Cart: Model<ICart> = mongoose.model('Cart', cartSchema) as Model<ICart>;

export default Cart;
