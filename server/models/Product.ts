
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
}

const productSchema: Schema<IProduct> = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Product: Model<IProduct> = mongoose.model('User', productSchema) as Model<IProduct>;
export default Product;
