import mongoose, {Model, Schema} from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description?: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
}

export const productSchema: Schema<IProduct> = new Schema<IProduct>({
    name: {type: String, required: true},
    description: {type: String, required: false},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    quantity: {type: Number, required: true},
});

const ProductModel = mongoose.model('Product', productSchema) as Model<IProduct>;
export default ProductModel;
