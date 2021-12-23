const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: String,
  email: String,
  fullName: String,
  dateOfBirth: Date,
  adress: String,
  password: String,
});

module.exports = login = mongoose.model("logins", loginSchema);
