import {Logger} from "../util/logger";
import {ICart, CartModel} from "../models/CartModel";
import ApiError from "../exceptions/api-error";
import mongoose, {ObjectId} from "mongoose";
import ProductModel, {IProduct} from "../models/ProductModel";

class CartService {
    private logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    async getCartItems(cartId: string) {
        const cartItems: ICart | null = await CartModel.findById(cartId);

        if (!cartItems) {
            this.logger.logInfo(`Cart not found. Passed Cart ID: ${cartId}`);
            throw ApiError.BadRequest("Cart not found");
        }

        this.logger.logInfo(`Retrieved cart items successfully. Cart ID: ${cartId}`)
        return cartItems;
    }

    async addCartItem(userId: string, productId: string, quantity: number) {
        try {

            let cart = await CartModel.findOne({user: userId});

            if (!cart)
                cart = await CartModel.create({user: userId, items: []});

            const product: IProduct | null = await ProductModel.findById(productId);
            if (!product || product.quantity < quantity) {
                throw ApiError.BadRequest('Product not found or insufficient quantity');
            }

            const cartItemIndex = cart.items.findIndex(item => item.product.toString() === productId);

            if (cartItemIndex == -1)
                cart.items.push({product: productId as unknown as ObjectId, quantity: quantity});
             else
                 cart.items[cartItemIndex].quantity += quantity;

            await cart.save();

            return cart;
        } catch (error) {
            throw error;
        }
    }


    async deleteCartItem(userId: string, productId: string) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            if (!userId || !productId) {
                throw ApiError.BadRequest('Invalid inputs');
            }

            const cart = await CartModel.findOneAndUpdate(
                {user: userId},
                {$pull: {items: {product: productId}}},
                {new: true, session}
            );

            if (!cart) {
                throw ApiError.BadRequest('Cart not found');
            }

            await session.commitTransaction();
            await session.endSession();

            return cart;
        } catch (error: any) {
            await session.abortTransaction();
            await session.endSession();
            this.logger.logError(`Error deleting item from cart: ${error.message}`);
            throw error;
        }
    }
}

export default new CartService();