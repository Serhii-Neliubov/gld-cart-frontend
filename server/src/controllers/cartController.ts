import {Response, Request, NextFunction} from "express";
import {Logger} from "../util/logger";
import CartService from "../services/cartService";
import ApiError from "../exceptions/api-error";

const logger = new Logger();

export const getCartItems = async (req: Request, res: Response, next: NextFunction) => {
    const {cartId} = req.params;
    try {
        const cartItems = await CartService.getCartItems(cartId);
        res.status(200).json({cartItems: cartItems});
    } catch (error: any) {
        logger.logError(`getCartItems error: ${error.message}`);
        next(new ApiError(500, `Server error: ${error.message}`));
    }
}

export const addCartItemHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {userId, productId, quantity} = req.body;

    if (typeof userId !== 'string' || typeof productId !== 'string' || typeof quantity !== 'number') {
        logger.logError('Invalid request parameters. The userId and productId should be strings and quantity should be a number');
        return next(new Error('Invalid request parameters. The userId and productId should be strings and quantity should be a number'));
    }
    try {
        const cart = await CartService.addCartItem(userId, productId, quantity);
        res.status(200).json({message: 'Item added to cart', cart});
        logger.logInfo(`Adding product ${productId} to cart for user ${userId}`);
    } catch (error: any) {
        logger.logError(`addCartItemHandler error: ${error.message}`);
        next(new ApiError(500, `Server error: ${error.message}`));
    }
}

export const removeCartItemHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {cartId, itemId} = req.params;
        const cart = await CartService.removeItem(cartId, itemId);
        return res.status(200).json({message: 'Item deleted from cart', cart});
    } catch (error: any) {
        logger.logError(`removeCartItemHandler error: ${error.message}`);
        next(new ApiError(500, `Server error: ${error.message}`));
    }
}