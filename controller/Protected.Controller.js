const jwt = require("jsonwebtoken");

const Protected = {
    protected : async (req, res, next) => {
        const token = req.headers["authorization"];
        console.log(token)
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

module.exports = Protected;
