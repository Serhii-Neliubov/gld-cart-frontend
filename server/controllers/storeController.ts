import {NextFunction, Request, Response} from "express";
import StoreService from "../services/store-service";

export function get_product() {

}


export function delete_product() {

}


export function update_product() {

}
export const create_product = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const {name, brand, desc, price, image, cartQuantity} = req.body;
    try {
        const newProduct = await StoreService.createProduct(name, brand, desc, price, image, cartQuantity);
        res.status(201).json({product: newProduct});
    } catch (error) {
        next(error);
    }
}