const jwt = require("jsonwebtoken");
const apiKey = process.env.API_KEY;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader,'authenticted')
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token not provided" });
  try {
    const decoded = jwt.verify(token, apiKey);
    req.user = decoded;
    res.status(200).json({ message: "game successful" });
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
