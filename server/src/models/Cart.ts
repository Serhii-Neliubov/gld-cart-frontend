import mongoose, {Document, Model, Schema} from 'mongoose';

interface ICart extends Document {
    user: mongoose.Types.ObjectId;
    items: ICartItem[];
    totalPrice: number;
    createdAt: Date;
    updatedAt: Date;
}
interface ICartItem {
   product: Schema.Types.ObjectId;
   quantity: number;
}

const itemSchema: Schema<ICartItem> = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: { type: Number, default: 1, required: true },
})

const cartSchema: Schema<ICart> = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    items: [itemSchema],
    totalPrice: {type: Number, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
const Cart: Model<ICart> = mongoose.model('Cart', cartSchema) as Model<ICart>;
export  {ICart, ICartItem, Cart};
