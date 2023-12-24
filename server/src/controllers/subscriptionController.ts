import {NextFunction, Request, Response} from "express";
import SubscriptionService from "../services/subscriptionService";

export const createSubscriptionCheckout = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const {userId, lookup_key} = req.body;
    try {
        const checkoutUrl = await SubscriptionService.createSubscriptionCheckout(userId, lookup_key);
        res.json({url: checkoutUrl});
    } catch (error) {
        next(error);
    }
}
export const cancelSubscription = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const subscriptionId = req.body.subscriptionId;
    try {
        const deletedSubscription = await SubscriptionService.cancelSubscription(subscriptionId);
        res.send(deletedSubscription);
    } catch (error) {
        next(error);
    }
};