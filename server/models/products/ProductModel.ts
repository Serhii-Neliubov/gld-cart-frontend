
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface Product extends Document {
  _id: string;
  title: string;
  brand: string;
  desc: string;
  price: string;
  image: string;
  cartQuantity: number;
}

export const productSchema = new Schema<Product>({
    title: { type: String, required: true },
    brand: { type: String, required: false },
    desc: { type: String, required: false },
    price: { type: String, required: true },
    image: { type: String, required: true },
    cartQuantity: { type: Number},
});

const ProductModel = mongoose.model('products', productSchema) as Model<Product>;
export default ProductModel;
