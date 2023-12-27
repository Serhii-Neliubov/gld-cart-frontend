import vehicleService from "../services/vehicleService";
import {IVehicle} from "../models/products/VehicleModel";
import { Request, Response, NextFunction } from 'express';

export const createVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newVehicle: IVehicle = req.body;
        const createdVehicle = await vehicleService.createVehicle(newVehicle);
        res.json(createdVehicle);
    } catch (err) {
        next(err);
    }
};

export const getVehicleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vehicleId = req.params.id;
        const vehicle = await vehicleService.getVehicleById(vehicleId);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json(vehicle);
    } catch (err) {
        next(err);
    }
};
export const getAllVehicles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vehicles = await vehicleService.getAllVehicles();
        res.json(vehicles);
    } catch (err) {
        next(err);
    }
};
export const updateVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vehicleId = req.params.id;
        const updatedVehicleData: Partial<IVehicle> = req.body;
        const updatedVehicle = await vehicleService.updateVehicle(vehicleId, updatedVehicleData);
        if (!updatedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json(updatedVehicle);
    } catch (err) {
        next(err);
    }
};

export const deleteVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vehicleId = req.params.id;
        const deletedVehicle = await vehicleService.deleteVehicle(vehicleId);
        if (!deletedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json({ message: 'Vehicle deleted successfully' });
    } catch (err) {
        next(err);
    }
};
