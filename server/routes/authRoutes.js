const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.post('/logout', authController.logout_post);
router.get('/refresh', authController.refresh_get);
router.get('/userData', authMiddleware.requireAuth, authController.userData_get);
router.post('/deleteAll', authController.delete_all);
module.exports = router;