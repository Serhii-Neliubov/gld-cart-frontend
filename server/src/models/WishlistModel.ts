import mongoose, { Document, Schema } from 'mongoose';
import {IProduct} from "./products/ProductModel";
interface IWishlist extends Document {
    user: mongoose.Types.ObjectId;
    products: mongoose.Types.ObjectId[] | IProduct[];
}

const wishlistSchema = new Schema<IWishlist>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Wishlist = mongoose.model<IWishlist>('Wishlist', wishlistSchema);

export { IWishlist, Wishlist };