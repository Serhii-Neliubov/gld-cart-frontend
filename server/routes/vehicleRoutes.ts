import * as authMiddleware from "../middlewares/authMiddleware";
import * as vehicleController from "../controllers/vehicleController";
import router from "./router";

router.post('/vehicle', authMiddleware.requireAuth, vehicleController.createVehicle);
router.get('/vehicles/:id', authMiddleware.requireAuth, vehicleController.getVehicleById);
router.get('/vehicles', authMiddleware.requireAuth, vehicleController.getAllVehicles);
router.put('/vehicles/:id', authMiddleware.requireAuth, vehicleController.updateVehicle);
router.delete('/vehicles/:id', authMiddleware.requireAuth, vehicleController.deleteVehicle);
