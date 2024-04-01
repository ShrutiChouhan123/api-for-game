const User = require("../models/UserModel");

const SignupController = {
    signup : async (req, res) => {
        const { email, password } = req.body;
        try {
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
          }
      
          const newUser = new User({ email, password });
          await newUser.save();
      
          res
            .status(201)
            .json({ message: "User created successfully", user: newUser });
          console.log(newUser);
        } catch (error) {
          console.error("Error creating user:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      }
}
 
module.exports = SignupController;
