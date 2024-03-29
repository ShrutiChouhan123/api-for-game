const express = require("express");
const cors = require("cors");
const AuthController = require("./controllers/authController");

const app = express();
const PORT = process.env.PORT || 3000;

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



