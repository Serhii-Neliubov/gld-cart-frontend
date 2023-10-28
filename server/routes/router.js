const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const paymentController = require("../controllers/paymentController");
const chatController = require("../controllers/chatController");

//Auth routes
router.post("/signup", userController.signup_post);
router.post("/login", userController.login_post);
router.post("/logout", userController.logout_post);
router.get("/refresh", userController.refresh_get);

//Reset password routes
router.post("/forgot-password", userController.initiate_password_reset);
router.post("/reset-password/:token", userController.reset_password);


//Message routes
router.post("/messages/create", authMiddleware.requireAuth, chatController.create_message);
router.put("/messages/:id/update", authMiddleware.requireAuth, chatController.update_message);
router.delete("/messages/:id/delete", authMiddleware.requireAuth, chatController.delete_message);

//Payment routes
router.post(
  "/create-payment-intent",
  authMiddleware.requireAuth,
  paymentController.create_payment_intent
);


//Admin routes
router.get(
  "/userData",
  authMiddleware.requireAuth,
  userController.userData_get
);
router.post("/delete-all", userController.delete_all);

module.exports = router;
