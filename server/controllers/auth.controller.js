const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
  transporter,
  activateUserTemp,
  registerUserTemp,
} = require('../helper/email.template');
const { errorHandler } = require('../helper/dbErrorHandler');
const config = require('../config/config');

//encrypt password
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

//compare encrpted password with password entered by user
async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

exports.PreSignup = async (req, res) => {
  const { username, first_name, last_name, email, password } = req.body;
  const newUser = User.findOne(
    { email: email.toLowerCase() },
    async (err, user) => {
      if (user) {
        return res.status(400).json({
          error: 'Email Already Exist!',
        });
      }
      const usr = { username, first_name, last_name, email, password };
      const token = jwt.sign(usr, config.jwtRegister, { expiresIn: '10m' });

      try {
        const sendEmail = () => {
          transporter.sendMail(activateUserTemp(usr, token), (err, info) => {
            if (err) {
              console.log(err);
              res.status(500).json({ error: 'Error Sending E-mail' });
            } else {
              console.log(`**Email Sent**`);
            }
          });
        };
        sendEmail();
        res.status(200).json({ msg: 'Email Sent, Activate account' });
      } catch (err) {
        console.log(err);
      }
    }
  );
};

exports.Signup = async (req, res) => {
  const { token } = req.body
  
  jwt.verify(token, config.jwtRegister, (err, decode) => {
    
  })
}