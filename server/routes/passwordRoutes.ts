import * as userController from "../controllers/userController";
import router from "./router";

router.post("/forgot-password", userController.initiatePasswordReset);
router.post("/reset-password/:token", userController.resetPasswordWithToken);
router.post("/reset-password", userController.resetPasswordWithEmail);