const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/notedb", {useNewUrlParser: true});

const datagridSchema = new mongoose.Schema({  
  
  empname : String,
  mail : String,
  sales1: String,
  sales2: String
});

const Datagrid = mongoose.model("Note", datagridSchema);

module.exports=  Datagrid;
