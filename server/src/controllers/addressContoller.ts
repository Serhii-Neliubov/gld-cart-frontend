import {NextFunction, Request, Response} from "express";
import UserService from "../services/userService";

export const addAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {userId, addressData} = req.body;
    try {
        await UserService.addAddress(userId, addressData);
        res.status(200).json({message: "Address was added successfully."});
    } catch (error) {
        next(error);
    }
};
export const updateAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {userId, addressData, addressId} = req.body;
    try {
        await UserService.updateAddress(userId, addressId, addressData);
        res.status(200).json("Address was updated successfully");
    } catch (error) {
        next(error);
    }
};
export const deleteAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {userId, addressId} = req.body;
    try {
        await UserService.deleteAddress(userId, addressId);
        res.status(200).json("Address was deleted successfully");
    } catch (error) {
        next(error);
    }
}
export const getAddressesHandler = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const addresses = await UserService.getAddresses(id);
        res.status(200).json(addresses);
    } catch (error) {
        next(error);
    }
}