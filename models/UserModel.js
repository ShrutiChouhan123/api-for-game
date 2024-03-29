const mongoose = require("mongoose");

// Define user schema
const UserModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserModel);

module.exports = User;
