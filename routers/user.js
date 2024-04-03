const express = require("express");
const userRouter = express.Router();
const userController = require('../controller/user.controller')
const verifyToken  =require('../middlwares/verifyToken')

userRouter.get("/game",verifyToken,userController.dashboard);
userRouter.post('/start-game',userController.startgame);
userRouter.post('/make-move',userController.makemove);
  
module.exports = userRouter 