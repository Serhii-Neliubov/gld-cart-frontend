
import { Router } from "express";
import * as userController from "../controllers/userController";
import * as authMiddleware from "../middlewares/authMiddleware";
import * as chatController from "../controllers/chatController";

const router:Router = Router();

// Auth routes
router.post("/signup", userController.signup_post);
router.post("/login", userController.login_post);
router.post("/logout", userController.logout_post);
router.get("/refresh", userController.refresh_get);

// Reset password routes
router.post("/forgot-password", userController.initiate_password_reset);
router.post("/reset-password/:token", userController.reset_password);

//Email routes
router.post("/send-contact-email", userController.send_contact_email);

// Message routes
// router.post("/chat/messages/create", chatController.create_message);
// router.get("/chat/messages/:user1Id/:user2Id", authMiddleware.requireAuth, chatController.get_messages);
// // router.put("/chat/messages/:id/update", authMiddleware.requireAuth, chatController.update_message);
// // router.delete("/chat/messages/:id/delete", authMiddleware.requireAuth, chatController.delete_message);
//
// // Payment routes
// router.post("/create-payment-intent", authMiddleware.requireAuth, paymentController.create_payment_intent);
//
// // Admin routes
// router.get("/userData", authMiddleware.requireAuth, userController.userData_get);
// router.post("/delete-all", userController.delete_all);

export default router;
