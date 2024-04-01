const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const routes = require('./routers')

const app = express();
const PORT = process.env.PORT || 3000;

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
app.use('/', routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



