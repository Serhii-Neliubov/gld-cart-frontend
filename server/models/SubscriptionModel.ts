import mongoose, {Schema, Document, Model} from 'mongoose';
export interface ISubscription extends Document {
    type: string;
    duration: number;
    price: number;
}
const subscriptionSchema: Schema<ISubscription> = new Schema({
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
});

const SubscriptionModel = mongoose.model<ISubscription>('Subscription', subscriptionSchema);
export default SubscriptionModel;
