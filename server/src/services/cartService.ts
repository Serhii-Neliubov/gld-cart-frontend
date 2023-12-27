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
            this.logger.logInfo(`Cart not found. Cart ID: ${cartId}`);
            throw ApiError.BadRequest("Cart not found");
        }

        this.logger.logInfo(`Retrieved cart items successfully. Cart ID: ${cartId}`)
        return cartItems;
    }

    async addCartItem(cartId: string, productId: string, brand: string, description: string, title: string, image: string, quantity: number, price: number) {
        const cart: ICart | null = await CartModel.findById(cartId);

        if (!cart) {
            return null;
        }

        cart.items.push({productId: productId,
            title: title,
            brand: brand,
            description: description,
            price: price,
            image: image,
            quantity: quantity} as IProduct);

        cart.totalPrice += quantity * price;

        await cart.save();
        return cart;
    }

    async deleteCartItem(cart: string, itemId: string) {


    }
}

export default new CartService();