import {NextFunction, Request, Response} from "express";
import UserService from "../services/userService";
import {Types} from "mongoose";

export const addAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {userId, addressData} = req.body;

    if (!Types.ObjectId.isValid(userId)) {
        return next(new Error("Invalid userId"));
    }
    try {
        await UserService.addAddress(userId, addressData);
        res.status(200).json({message: "Address was added successfully."});
    } catch (error) {
        next(error);
    }
};

export const updateAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {userId, addressData, addressId} = req.body;

    if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(addressId)) {
        return next(new Error("Invalid userId or addressId"));
    }

    try {
        await UserService.updateAddress(userId, addressId, addressData);
        res.status(200).json({message: "Address was updated successfully"});
    } catch (error) {
        next(error);
    }
};

export const deleteAddressHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {userId, addressId} = req.body;

    if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(addressId)) {
        return next(new Error("Invalid userId or addressId"));
    }

    try {
        await UserService.deleteAddress(userId, addressId);
        res.status(200).json({message: "Address was deleted successfully"});
    } catch (error) {
        next(error);
    }
};

export const getAddressesHandler = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!Types.ObjectId.isValid(id)) {
        return next(new Error("Invalid userId"));
    }

    try {
        const addresses = await UserService.getAddresses(id);
        res.status(200).json(addresses);
    } catch (error) {
        next(error);
    }
};


// function isAddressValid(address: IAddress) {
//     const {
//         recipients_name,
//         street_address,
//         city,
//         country,
//         ZIP_code,
//         phone_number,
//     } = address;
//
//     const hasRequiredFields = recipients_name && street_address && city && country && ZIP_code && phone_number;
//
//     const isZipValid = /(^\d{5}$)/.test(ZIP_code);
//     const isPhoneValid = /(^\d{10}$)/.test(phone_number);
//
//     return hasRequiredFields && isZipValid && isPhoneValid;
// }
