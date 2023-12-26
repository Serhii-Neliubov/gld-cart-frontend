import {NextFunction, Request, Response} from "express";
import PaymentService from "../services/paymentService";

interface ICheckoutRequestBody {
    userId: string;
    cartItems: IItem[];
}

interface IItem {
    name: any;
    image: any;
    desc: any;
    id: any;
    price: number;
    cartQuantity: any;
}

export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const {email, name} = req.body;
    try {
        const customerId = await PaymentService.createCustomer(email, name);
        res.send(customerId);
    } catch (error) {
        next(error);
    }
};
export const createPaymentCheckout = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const requestBody = req.body as ICheckoutRequestBody;
    try {
        const checkoutUrl = await PaymentService.createPaymentCheckout(requestBody);
        res.json({url: checkoutUrl});
    } catch (error) {
        next(error);
    }
};

