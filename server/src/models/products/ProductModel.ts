import mongoose, {Model, Schema, Types} from 'mongoose';

export interface IProduct extends Document{
    title: string;
    description?: string;
    price: number;
    image: string;
    quantity: number;
}

export const productSchema: Schema<IProduct> = new Schema<IProduct>({
    title: {type: String, required: true},
    description: {type: String, required: false},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    quantity: {type: Number, required: true},
});

const ProductModel = mongoose.model('products', productSchema) as Model<IProduct>;
export default ProductModel;
