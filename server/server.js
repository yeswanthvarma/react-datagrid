const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://s1th-user_789:6300303635@cluster0.setdrxo.mongodb.net/datagriddb");

app.use("/", require("./routes/noteroute"));

app.listen(5050, function(){
    console.log("express sever is in 5050");
});


