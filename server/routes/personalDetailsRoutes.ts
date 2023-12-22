import * as authMiddleware from "../middlewares/authMiddleware";
import * as userController from "../controllers/userController";
import router from "../router";

router.put("/update-personal-details", authMiddleware.requireAuth, userController.updatePersonalDetails);
