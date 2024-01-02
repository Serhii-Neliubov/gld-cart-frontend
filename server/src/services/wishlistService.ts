import ApiError from '../exceptions/api-error';
import { Logger } from '../util/logger';
import WishList from "../models/WishList";
import mongoose from "mongoose";

class WishlistService {
    private logger: Logger;
    constructor(logger: Logger) {
        this.logger = logger;
    }
    async addToWishlist(userId: string, productId: string)  {
        try {
            let wishlist = await WishList.findOne({user: userId});
            if (!wishlist) {
                wishlist = new WishList({ user: userId, products: [productId]});
            } else if (!wishlist.products.includes(new mongoose.Types.ObjectId(productId))) {
                wishlist.products.push(new mongoose.Types.ObjectId(productId));
                wishlist = await wishlist.save();
            }
            return this.saveWishlist(wishlist, 'Error adding to wishlist.');
        } catch(err) {
            this.logger.logError('Error in addToWishlist method', { error: err });
            throw ApiError.InternalServerError('Error adding product to wishlist');
        }
    }

    async removeFromWishlist(userId: string, productId: string): Promise<WishList> {
        const wishlist = await WishList.findOne({user: userId});
        if (!wishlist) {
            this.logger.logError('Wishlist not found.', { userId });
            throw ApiError.BadRequest("Wishlist not found.");
        }

        const productIndex = wishlist.products.indexOf(productId);
        if (productIndex > -1) {
            wishlist.products.splice(productIndex, 1);
        } else {
            this.logger.logError('Product not found in wishlist.', { userId, productId });
            throw ApiError.BadRequest("Product not found in wishlist.");
        }

        return this.saveWishlist(wishlist, 'Error removing from wishlist.');
    }

    async getWishlist(userId: string): Promise<WishList> {
        try {
            return await WishList.findOne({user: userId}).populate('products');
        } catch(err) {
            this.logger.logError('Error retrieving wishlist.', { error: err });
            throw ApiError.BadRequest("Error retrieving wishlist.");
        }
    }

    private async saveWishlist(wishlist: WishList, errorMessage: string): Promise<WishList> {
        try {
            return await wishlist.save();
        } catch(err) {
            this.logger.logError(errorMessage, { error: err });
            throw ApiError.InternalServerError(errorMessage);
        }
    }
}

export default new WishlistService();