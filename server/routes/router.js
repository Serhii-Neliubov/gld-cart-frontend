const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const paymentController = require("../controllers/paymentController");

//Auth routes
router.post("/signup", userController.signup_post);
router.post("/login", userController.login_post);
router.post("/logout", userController.logout_post);
router.get("/refresh", userController.refresh_get);
router.get(
  "/userData",
  authMiddleware.requireAuth,
  userController.userData_get
);
router.post("/deleteAll", userController.delete_all);

//Payment routes
router.post(
  "/create-payment-intent",
  authMiddleware.requireAuth,
  paymentController.create_payment_intent
);

module.exports = router;
