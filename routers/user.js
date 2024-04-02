const express = require("express");

const userRouter = express.Router();
const SignupController = require("../controller/signup.controller");
const LoginController = require("../controller/login.controller");
const LogoutController = require("../controller/logout.controller");
const verifyToken = require("../middlwares/verifyToken");
const GameController = require("../controller/game.controller");

userRouter.post("/signup", SignupController.signup);
userRouter.post("/login",LoginController.login, (req, res) => {
  res.status(200).json({ message: "Protected route accessed" });
});
userRouter.post("/logout", LogoutController.logout);
userRouter.get("/game", verifyToken,GameController.dashboard);
userRouter.post('/start-game', GameController.startgame);
userRouter.post('/make-move',GameController.makemove);
  
module.exports = userRouter;
