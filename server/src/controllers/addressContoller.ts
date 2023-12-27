import {NextFunction, Request, Response} from "express";
import UserService from "../services/userService";

export const addAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {email, recipients_name, street_address, city, state, country, ZIP_code, phone_number} = req.body;
    const addressData = {
        recipients_name,
        street_address,
        city,
        state,
        country,
        ZIP_code,
        phone_number,
    };
    try {
        await UserService.addAddress(email, addressData);
        res.status(200).json({message: "Address was added successfully."});
    } catch (error) {
        next(error);
    }
};
export const updateAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {email, updatedAddressData, addressId} = req.body;
    try {
        await UserService.updateAddress(email, addressId, updatedAddressData);
        res.status(200).json("Address was updated successfully");
    } catch (error) {
        next(error);
    }
};
export const deleteAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {email, updatedAddressData, addressId} = req.body;
    try {
        await UserService.deleteAddress(email, addressId);
        res.status(200).json("Address was deleted successfully");
    } catch (error) {
        next(Error)
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