
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  cartQuantity: number;
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    cartQuantity: { type: Number},
});

const Product: Model<IProduct> = mongoose.model('User', productSchema) as Model<IProduct>;
export default Product;
