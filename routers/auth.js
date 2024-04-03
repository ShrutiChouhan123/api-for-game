const express = require("express");
const authRouter = express.Router();
const AuthController = require('../controller/auth.controller')

authRouter.post("/signup", AuthController.signup);
authRouter.post("/login",[AuthController.login, (req, res) => {
  res.status(200).json({ message: "Protected route access" });
}]);
authRouter.post("/logout", AuthController.logout);

module.exports = authRouter