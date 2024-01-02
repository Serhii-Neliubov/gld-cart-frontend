import {NextFunction, Request, Response} from "express";
import ApiError from "../exceptions/api-error";
import User from "../models/User";

export const requireSubscription = (requiredSubscriptionType: string) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = res.locals.user.userId;

            if (!userId) {
                return next(ApiError.UnauthorizedError());
            }

            const user = await User.findById(userId).populate('activeSubscription');

            if (!user || !user.activeSubscription) {
                res.status(403).json({ error: 'No active subscription found' });
            }

            const userSubscriptionType = user?.activeSubscription;

            if (userSubscriptionType !== requiredSubscriptionType) {
                res.status(403).json({ error: 'Access denied for this subscription type' });
            }
            return next();
        } catch (error) {
            console.error('Error checking subscription:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
};
