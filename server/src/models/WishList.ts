import mongoose, { Document, Schema } from 'mongoose';
interface IWishlist extends Document {
    user: mongoose.Types.ObjectId;
    products: mongoose.Types.ObjectId[];
}

const wishlistSchema = new Schema<IWishlist>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const WishList = mongoose.model<IWishlist>('Wishlist', wishlistSchema);

export default WishList;