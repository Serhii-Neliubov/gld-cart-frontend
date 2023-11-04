
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IOrder extends Document {
    user: mongoose.Types.ObjectId;
    refreshToken: string;
}

const orderSchema: Schema<IOrder> = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        required: true,
    },
});

const Order: Model<IOrder> = mongoose.model('Order', orderSchema) as Model<IOrder>;

export default Order;
