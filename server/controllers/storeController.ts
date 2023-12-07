import { NextFunction, Request, Response } from "express";
import StoreService from "../services/store-service";

export const get_vehicle_item = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Function logic
};

export const create_vehicle_item = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Function logic
};

export const get_product = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Function logic
};

export const delete_product = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Function logic
};

export const update_product = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Function logic
};

export const create_product = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, brand, desc, price, image, cartQuantity } = req.body;
    try {
        const newProduct = await StoreService.createProduct(name, brand, desc, price, image, cartQuantity);
        res.status(201).json({ product: newProduct });
    } catch (error) {
        next(error);
    }
};
