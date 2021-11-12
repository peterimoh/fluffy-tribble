const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');
const {
  userSigninValidator,
  userSignupValidator,
} = require('../validators/auth.validate');
const { runValidation } = require('../validators/run.validate');

router.post(
  '/presignup',
  userSignupValidator,
  runValidation,
  auth.preSignup
);

router.post('/signup-redirect', auth.Signup)
router.post('/login', userSigninValidator, runValidation, auth.Login)
router.post('/resetpassword', auth.updatePassword);

module.exports = router;
