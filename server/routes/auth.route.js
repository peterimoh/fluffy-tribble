const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');
const {
  userSigninValidator,
  userSignupValidator,
} = require('../validators/auth.validate');
const { runValidation } = require('../validators/run.validate');

router.post(
  '/pre-activate',
  userSignupValidator,
  runValidation,
  auth.PreSignup
);

router.post('/signup-redirect', auth.Signup)
router.post('/login', userSigninValidator, runValidator, auth.Login)

module.exports = router;
