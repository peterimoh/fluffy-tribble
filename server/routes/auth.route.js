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

module.exports = router;
