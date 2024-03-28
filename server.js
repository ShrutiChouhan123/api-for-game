const express = require('express');
const cors = require('cors');
const authController = require('./controllers/authController');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

app.use(express.json());

app.post('/login', authController.login);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
