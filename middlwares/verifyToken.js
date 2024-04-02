const jwt = require("jsonwebtoken");
// const apiKey = process.env.API_KEY;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.Authorization
  console.log(authHeader,'jikdfcsfikdsf8id')
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token not provided" });
  try {
    const decoded = jwt.verify(token, '2hxAq1S5NDkIIOOT');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
