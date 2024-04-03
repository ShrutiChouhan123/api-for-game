const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const apiKey = process.env.API_KEY;
require('dotenv').config();


const AuthController = {
  signup: async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const token = jwt.sign({ email }, apiKey, {
        expiresIn: "2h",
      });

      const newUser = new User({ email, password });
      await newUser.save();

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser, token });
      console.log(newUser, token);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ email: user.email }, apiKey);

      res.status(200).json({ message: "Login successful", token });
      console.log("login success");
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  logout: (req, res) => {
    console.log("logout success");
    res.status(200).json({ message: "Logout successful" });
  },
};

module.exports = AuthController;
