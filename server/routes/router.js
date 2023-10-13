const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const paymentController = require("../controllers/paymentController");

//Auth routes
router.post("/api/signup", userController.signup_post);
router.post("/api/login", userController.login_post);
router.post("/api/logout", userController.logout_post);
router.get("/api/refresh", userController.refresh_get);

//Reset password routes
router.post('/api/forgot-password', userController.initiate_password_reset);
router.post('/api/reset-password/:token', userController.reset_password);

//Admin routes
router.get(
  "/userData",
  authMiddleware.requireAuth,
  userController.userData_get
);
router.post("/delete-all", userController.delete_all);

//Payment routes
router.post(
  "/create-payment-intent",
  authMiddleware.requireAuth,
  paymentController.create_payment_intent
);

module.exports = router;