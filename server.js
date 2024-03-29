const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const AuthController = require("./controllers/authController");

const app = express();
const PORT = process.env.PORT || 3000;

const DB = "mongodb+srv://shchouhan:2hxAq1S5NDkIIOOT@My-Game.g3ootrs.mongodb.net/?retryWrites=true&w=majority&appName=my-project"

mongoose.connect(DB,{
  useNewUrlParser : true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log("mongos connection successful");
}).catch((err)=>{
  console.log("connection failed", err);
});

app.use(cors());
app.use(express.json());

app.post("/signup", AuthController.signup);

app.post("/login", AuthController.login);

app.post("/logout", (req, res) => {
  console.log('logout success')
  res.status(200).json({ message: "Logout successful" });
});

app.get("/protected", AuthController.authenticateToken, (req, res) => {
  res.json({
    message: "Protected route. You are authenticated.",
    user: req.user,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



