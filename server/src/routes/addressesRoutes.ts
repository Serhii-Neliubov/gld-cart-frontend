import * as authMiddleware from "../middlewares/authMiddleware";
import * as addressController from "../controllers/addressContoller";
import {Router} from "express";

export const addressesRoutes: Router = Router();

addressesRoutes.post("/add-address", authMiddleware.requireAuth, addressController.addAddressHandler);
addressesRoutes.get("/get-address/:id", authMiddleware.requireAuth, addressController.getAddressesHandler)
addressesRoutes.put("/update-address", authMiddleware.requireAuth, addressController.updateAddressHandler);
addressesRoutes.delete("/delete-address", addressController.deleteAddressHandler);
