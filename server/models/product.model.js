const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  CPU: {
    type: String,
    required: true,
  },
  RAM: {
    required: true,
    type: String,
  },
  Raid: {
    type: String,
    required: true,
  },
  IP: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('Product', planSchema);