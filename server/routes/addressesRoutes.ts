import * as authMiddleware from "../middlewares/authMiddleware";
import * as userController from "../controllers/userController";
import router from "./router";

router.post("/add-address", authMiddleware.requireAuth, userController.addAddress);
router.get("/get-addresses/:id", authMiddleware.requireAuth, userController.getAddresses)
router.put("/update-address", authMiddleware.requireAuth, userController.updateAddress);
