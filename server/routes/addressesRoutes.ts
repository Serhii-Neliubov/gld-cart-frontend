import * as authMiddleware from "../middlewares/authMiddleware";
import * as userController from "../controllers/userController";
import {Router} from "express";

export const addressesRoutes: Router = Router();

addressesRoutes.post("/add-address", authMiddleware.requireAuth, userController.addAddress);
addressesRoutes.get("/get-addresses/:id", authMiddleware.requireAuth, userController.getAddresses)
addressesRoutes.put("/update-address", authMiddleware.requireAuth, userController.updateAddress);
