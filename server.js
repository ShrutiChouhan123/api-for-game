const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
const userRouter = require('./routers/user')
const authRouter = require('./routers/auth')
const port = process.env.PORT || 3000; 
const DB = process.env.DB
const app = express();

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

app.use('/auth',authRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



