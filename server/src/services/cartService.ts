import {Logger} from "../util/logger";
import CartModel, {ICart} from "../models/CartModel";
import ApiError from "../exceptions/api-error";
import {IProduct} from "../models/products/ProductModel";

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

    async addCartItem(userId: string, cartId: string | null, title: string, description: string, image: string, quantity: number, price: number) {
        let cart: ICart | null;

        if (!cartId) {
            cart = await CartModel.create({
                user: userId,
                totalPrice: 0,
            });
        } else {
            cart = await CartModel.findById(cartId);
        }

        if (!cart) {
            this.logger.logError("Undefined error, while adding to cart");
            return null;
        }

        cart.items.push({
            title: title,
            description: description,
            price: price,
            image: image,
            quantity: quantity
        } as IProduct);

        cart.totalPrice += quantity * price;

        await cart.save();
        return {cartId: cart.id, items: cart.items, totalPrice: cart.totalPrice};
    }

    async deleteCartItem(cart: string, itemId: string) {


    }
}

export default new CartService();