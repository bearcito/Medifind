const express = require("express");
const {
  loginController,
  registerController,
  getAllUsersController,
  getUserByIdController,
} = require("../controllers/userCtrl");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

router.get("/users", getAllUsersController)


router.get("/users/:id", getUserByIdController)

module.exports = router;

