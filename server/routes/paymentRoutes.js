const { Router } = require('express');
const paymentController = require('../controllers/paymentController');
const router = Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create_payment_session', authMiddleware.requireAuth, paymentController.payment_post);
module.exports = router;
