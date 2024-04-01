const express = require("express");
const router = express.Router();
const SignupController = require("../controller/Signup.Controller");
const LoginController = require("../controller/Login.Controller");
const LogoutController = require("../controller/Logout.Controller");
const verifyToken = require("../middlwares/verifyToken");
const GameController = require("../controller/GameController");

router.post("/signup", SignupController.signup);
router.post("/login", LoginController.login, (req, res) => {
  res.status(200).json({ message: "Protected route accessed" });
});
router.post("/logout", LogoutController.logout);
router.get("/game",verifyToken, GameController.dashboard);
module.exports = router;
