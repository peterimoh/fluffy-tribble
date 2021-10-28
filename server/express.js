require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const authRoute = require('./routes/auth.route');
const planRoute = require('./routes/plan.route')

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//routes
app.get('/', (req, res) => {
  console.log(res.cookie());
  res.status(200).json({ time: Date().toString() });
});
app.use('/api', authRoute);
app.use('/api/plan', planRoute)

module.exports = app;
