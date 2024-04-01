const User = require("../models/UserModel");

const LoginController  = {
    login : async (req, res) => {
        const { email, password } = req.body;
      
        try {
          const user = await User.findOne({ email });
      
          if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
          }
      
          const token = jwt.sign({ email: user.email }, "your-secret-key");
      
          
          res.status(200).json({ message: "Login successful", token });
          console.log("login success");
        } catch (error) {
          console.error("Error during login:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      }
}

module.exports = LoginController;
