const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");


const users = [];

class AuthController {
  // signup(req, res) {
  //   const { email, password } = req.body;

  //   if (users.some((user) => user.email === email)) {
  //     return res.status(400).json({ message: "Email already exists" });
  //   }

  //   const newUser = { email, password };
  //   users.push(newUser);

  //   res
  //     .status(201)
  //     .json({ message: "User created successfully", user: newUser });
  //   console.log(users);
  // }
    async signup(req, res) {
      const { email, password } = req.body;
  
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "Email already exists" });
        }
  
        const newUser = new User({ email, password });
        await newUser.save();
  
        res.status(201).json({ message: "User created successfully", user: newUser });
        console.log(newUser);
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
    

  login(req, res) {
    const { email, password } = req.body;

    const user = users.find((user) => user.email === email);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ email: user.email }, "your-secret-key");

    res.status(200).json({ message: "Login successful", token });
    console.log("login success");
  }

  authenticateToken(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. Token not provided" });
    }

    jwt.verify(token, "your-secret-key", (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      req.user = decoded;
      next();
    });
  }
}

module.exports = new AuthController();
