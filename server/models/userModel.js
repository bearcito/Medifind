// src/models/userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  speciality: {
    type: String,
    required: function () {
      return this.userType === "doctor";
    },
  },
  photo: {
    type: String,
    required: [true, "Photo is required"],
  },
  userType: {
    type: String,
    required: [true, "User type is required"],
    enum: ["paciente", "doctor"],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
