const config = require('../config/config');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email,
    pass: config.pass,
  },
});

const activateUserTemp = (usr, token) => {
  const link = `http://localhost:${config.port}/api/signup/${token}`;
  const from = config.email;
  const to = usr.email;
  const subject = 'Account Activation';
  const html = `
    <p>Dear ${usr.username},</p>
    <p>Thank you for registering for our service</p>
    <p><b>this email will expire in 10 minutes</b></p>
    <h4>Please follow the <a href='localhost:${config.port}/auth/account/activate/${token}'>Link</a> to activate your account and complete your registration</h4>
    or <a href=${link}>click here to activate</a>
    <p>${link}</p>
    `;
  return { from, to, subject, html };
};

const registerUserTemp = (user) => {
  const from = config.email;
  const to = user.email;
  const subject = 'Account Registration Successful';
  const html = `
    <p>Dear ${user.name}</p>
    <p>Thank you for registering for our Service</p>
    <p>Your username is: ${user.username} </p>
  <p>If you have any questions please contact support</p>
  <p>Best regards,</p>
    `;
  return { from, to, subject, html };
};

module.exports = { transporter, activateUserTemp, registerUserTemp };
