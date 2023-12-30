import {Logger} from "../util/logger";
import {ICart, CartModel} from "../models/CartModel";
import ApiError from "../exceptions/api-error";
import ProductModel, {IProduct} from "../models/ProductModel";

import {Types as MongooseTypes} from 'mongoose';

class CartService {
    private logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    async getCartItems(userId: string): Promise<ICart | ApiError> {
        try {
            if (!userId) {
                throw ApiError.BadRequest('Invalid inputs');
            }
            const cartItems: ICart | null = await CartModel.findOne({user: userId});
            if (!cartItems) {
                this.logger.logInfo(`Cart not found for User: ${userId}`);
                throw ApiError.BadRequest("Cart not found");
            }
            this.logger.logInfo(`Retrieved cart items successfully for User: ${userId}`)
            return cartItems;
        } catch (error: any) {
            this.logger.logError(`Error while retrieving cart items for User: ${userId}. Error: ${error.message}`);
            throw ApiError.BadRequest(error.message);
        }
    }

    async addCartItem(userId: string, productId: string, quantity: number): Promise<ICart | ApiError> {
        try {
            const product: IProduct | null = await ProductModel.findById(productId);
            if (!product || product.quantity < quantity) {
                this.logger.logError(`Product not found or insufficient quantity for productId: ${productId}`);
                throw ApiError.BadRequest('Product not found or insufficient quantity');
            }
            let cart: ICart | null = await CartModel.findOneAndUpdate(
                {user: userId, 'items.product': {$ne: productId}},
                {$push: {items: {product: new MongooseTypes.ObjectId(productId), quantity: quantity}}},
                {new: true}
            );
            if (!cart) {
                let newCart = {
                    user: userId,
                    items: [{product: new MongooseTypes.ObjectId(productId), quantity: quantity}]
                }
                cart = await CartModel.create(newCart);
                this.logger.logInfo(`New cart created for User: ${userId}`);
            } else {
                this.logger.logInfo(`Product added to the cart. ProductId: ${productId}, Quantity: ${quantity}`);
            }
            return cart;
        } catch (error: any) {
            this.logger.logError(`Error while adding cart item for User: ${userId}. Error: ${error.message}`);
            throw ApiError.BadRequest(error.message);
        }
    }

    async removeItem(userId: string, productId: string): Promise<ICart | ApiError> {
        try {
            if (!userId || !productId) {
                throw ApiError.BadRequest('Invalid inputs');
            }
            const cart = await CartModel.findOneAndUpdate(
                {user: userId},
                {$pull: {items: {product: productId}}},
                {new: true}
            );
            if (!cart) {
                this.logger.logInfo(`Cart not found for User: ${userId}`);
                throw ApiError.BadRequest("Cart not found");
            }
            this.logger.logInfo(`Product removed successfully from User: ${userId}'s cart`);
            return cart;
        } catch (error: any) {
            this.logger.logError(`Error while removing product from User: ${userId}'s cart. Error: ${error.message}`);
            throw ApiError.BadRequest(error.message);
        }
    }
}

export default new CartService();