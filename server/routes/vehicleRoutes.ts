import * as authMiddleware from "../middlewares/authMiddleware";
import * as vehicleController from "../controllers/vehicleController";
import {Router} from "express";

export const vehicleRoutes: Router = Router();

vehicleRoutes.post('/vehicle', authMiddleware.requireAuth, vehicleController.createVehicle);
vehicleRoutes.get('/vehicles/:id', authMiddleware.requireAuth, vehicleController.getVehicleById);
vehicleRoutes.get('/vehicles', authMiddleware.requireAuth, vehicleController.getAllVehicles);
vehicleRoutes.put('/vehicles/:id', authMiddleware.requireAuth, vehicleController.updateVehicle);
vehicleRoutes.delete('/vehicles/:id', authMiddleware.requireAuth, vehicleController.deleteVehicle);
