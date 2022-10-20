const mongoose = require("mongoose");

const order = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  size: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  phone_number: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  dateOfBuy: {
    type: String,
    required: true,
  },

  dateOfDelivery: {
    type: String,
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true,
  },
});

const FirstSch = mongoose.model("orderData", order);
module.exports = FirstSch;
