"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController = __importStar(require("../controllers/userController"));
const router = (0, express_1.Router)();
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
exports.default = router;
