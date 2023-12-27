import {Response, Request, NextFunction} from "express";
import {Logger} from "../util/logger";
import CartService from "../services/cartService";

const logger = new Logger();
export const getCartItems = async (req: Request, res: Response, next: NextFunction) => {
    const {cartId} = req.params;
    try {
        const cartItems = await CartService.getCartItems(cartId);
        res.status(200).json({cartItems: cartItems});
    } catch (error) {
        next(error);
    }

}
export const addCartItemHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {userId, cartId, productId, title, description, image, quantity, price} = req.body;
    try {

        if (quantity <= 0 || price <= 0) {
            return res.status(400).json({message: 'Invalid input'});
        }
        const cart = await CartService.addCartItem(userId, cartId, title, description, image, quantity, price);
        res.status(200).json({message: 'Item added to cart', cart});

    } catch (error) {
        next(error);
    }
}
export const deleteCartItemHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {cartId, itemId} = req.params;

        const cart = await CartService.deleteCartItem(cartId, itemId);

        return res.status(200).json({message: 'Item deleted from cart', cart});
    } catch (error) {
        next(error);
    }
}