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
  const { token } = req.body;

  jwt.verify(token, config.jwtRegister, (err, decode) => {
    if (err)
      return res.status(403).json({ error: 'Expired Link, Sign-up Again' });
  });

  const { first_name, last_name, email, password, username } =
    jwt.decode(token);

  //create username and profile
  const profile = `${config.client_url}/profile/${username}`;
  const hashed_Password = await hashPassword(password);

  const newUser = new User({
    first_name,
    last_name,
    password: hashed_Password,
    profile,
    username,
    email,
  });

  newUser.save((err, user) => {
    if (err) return res.status(403).json({ error: errorHandler(err) });
    return res
      .status(200)
      .json({ msg: 'Sign-up success!, you can now log-in' });
  });
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email }).exec((err, user) => {
    if (err || !user)
      return res.status(404).json({
        error: 'This user does not exist',
      });

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return res.status(400).json({ error: 'Invalid Password' });
    });

    //generate new token for users
    const token = jwt.sign({ _id: user._id }, config.jwtSecret, {
      expiresIn: '1d',
    });
    res.cookie('token', token, { expiresIn: '1d' });
    const { _id, username, email } = user;
    return res.status(200).json({ token, user: { _id, username, email } });
  });
};
