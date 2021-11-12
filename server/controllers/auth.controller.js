const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {
  transporter,
  activateUserTemp,
  registerUserTemp,
} = require('../helper/email.template');
const { getErrorMessage } = require('../helper/dbErrorHandler');
const config = require('../config/config');

//encrypt password
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

// 'mongodb+srv://ali_vps:cRji8gcsmvpdXqF@cluster0.z4pze.mongodb.net/vpsserve?retryWrites=true&w=majority';

//compare encrpted password with password entered by user
async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

exports.preSignup = async (req, res) => {
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
            // return
          });
        };
        sendEmail();
        res.status(200).json({
          msg: 'An Activation E-mail has been sent to your mail, this email will expire in 10 minutes. follow the link to activate account',
        });
      } catch (err) {
        console.log(err);
      }
    }
  );
};

exports.Signup = async (req, res) => {
  const { token } = req.body;
  if (token) {
    jwt.verify(token, config.jwtRegister, async (err, decode) => {
      if (err) {
        console.log(err);
        return res.status(401).json({
          error: 'Expired link. Signup again',
        });
      }
      const { username, first_name, last_name, email, password } =
        jwt.decode(token);

      //create profile
      const profile = `${config.client_url}/profile/${username}`;

      const hashPswd = await hashPassword(password);

      const NewUser = new User({
        username,
        first_name,
        last_name,
        email,
        password: hashPswd,
        profile,
      });
      NewUser.save((err, user) => {
        if (err) {
          return res.status(401).json({
            error: getErrorMessage(err),
          });
        }
        return res.json({
          message: 'Signup success!, now you can sign in',
        });
      });
    });
  } else {
    return res.status(400).json({
      error: 'Something went wrong. Try again',
    });
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    return res.status(400).json({
      error: 'User with that email does not exist',
    });
  }

  const isValidPassword = await validatePassword(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json({
      error: 'Invalid Password',
    });
  }

  const userProfile = user.profile;
  const token = jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: '24h',
  });

  return res.json({
    user,
    token,
    profile: userProfile,
  });
};

exports.SignOut = (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'Signout Successful!',
  });
};

exports.updatePassword = async (req, res) => {
  const { password, newPassword, confirmPassword, userID } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({
      error: 'Password do not match',
    });
  }

  if (newPassword.length < 6 || confirmPassword.length < 6) {
    return res.status(400).json({ error: 'Password must be up to 6 digits' });
  }

  const hashPswd = await hashPassword(newPassword);

  User.findById(userID, async (err, user) => {
    if (err)
      return res.status(400).json({ error: 'Error occured, try again later!' });
    console.log(user);
    if (user) {
      const validPass = await validatePassword(password, user.password);
      if (!validPass) {
        return res.status(400).json({
          error: 'Invalid Password',
        });
      } else {
        User.findByIdAndUpdate(
          userID,
          { password: hashPswd },
          { new: true },
          (err, user) => {
            if (err) {
              return res.status(400).json({
                error: 'Something went wrong',
              });
            }
            return res.json({
              message: 'Password Updated Successfully',
            });
          }
        );
      }
    }
  });
};
