import * as userController from "../controllers/userController";
import router from "./router";

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);

router.get("/tokens/oauth/google", userController.googleOauthHandler);
