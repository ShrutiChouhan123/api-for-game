// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.post('/login', authController.login);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });