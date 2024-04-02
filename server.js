const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./routers/admin')
require('dotenv').config();
const userRouter = require('./routers/user')

const port = process.env.PORT || 3000; 
const apiKey = process.env.API_KEY;
const app = express();

const DB = "mongodb+srv://shchouhan:2hxAq1S5NDkIIOOT@My-Game.g3ootrs.mongodb.net/?retryWrites=true&w=majority&appName=my-project"

mongoose.connect(DB,{
  useNewUrlParser : true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log("mongos connection successful");
}).catch((err)=>{
  console.log("connection failed", err);
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



