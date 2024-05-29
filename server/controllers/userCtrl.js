// src/controllers/authController.js
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invalid Email or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, "banana", { expiresIn: "1d" });
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Error in Login Controller ${error.message}` });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const usersWithSpeciality = await userModel.find({
      speciality: { $exists: true, $ne: "" },
    });
    res.status(200).json({ success: true, data: usersWithSpeciality });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: `Error: ${error.message}` });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: `Error: ${error.message}` });
  }
};

module.exports = {
  loginController,
  registerController,
  getAllUsersController,
  getUserByIdController,
};
