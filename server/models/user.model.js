const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    index: true,
    lowercase: true,
  },
  first_name: {
    type: String,
    trim: true,
    required: true,
    max: 20,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    max: 20,
  },
  profile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    maxlength: 40,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema)