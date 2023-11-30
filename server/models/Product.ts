
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IProduct extends Document {
  _id: string;
  name: string;
  brand: string;
  desc: string;
  price: number;
  image: string;
  cartQuantity: number;
}

export const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    brand: { type: String, required: false },
    desc: { type: String, required: false },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    cartQuantity: { type: Number},
});

const Product = mongoose.model('Product', productSchema) as Model<IProduct>;
export default Product;
