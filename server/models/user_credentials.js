const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email_id: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  confirm_password: {
    type: String,
    required: true,
  },
  userIsGoog: {
    type: Boolean,
    required: false,
  },
});

const FirstSch = mongoose.model("UserCredential", user);
module.exports = FirstSch;
