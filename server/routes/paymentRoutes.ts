import * as authMiddleware from "../middlewares/authMiddleware";
import * as paymentController from "../controllers/paymentController";
import router from "./router";

router.post("/create-checkout-session", authMiddleware.requireAuth, paymentController.createPaymentCheckout);
router.post("/create-subscription-checkout", authMiddleware.requireAuth, paymentController.createSubscriptionCheckout);
router.post("/cancel-subscription", authMiddleware.requireAuth, paymentController.cancelSubscription);
router.get("/get-customer", authMiddleware.requireAuth, paymentController.createCustomer);
router.post("/webhook", paymentController.handleStripeWebhook);
