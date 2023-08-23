const express = require("express");
const Router = express.Router();
const Datagrid = require("../models/model");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Router.post("/", async (req, res) => {
//     let newnote = {
//         tittle:req.body.tittle,
//         content:req.body.content
//     };
//     let collection = await Note.collection("note");
//     let result = await collection.insertOne(newnote);
//     res.send(result).status(204);
//   });


Router.route("/data").get(async(req,res)=>{

    const data = await Datagrid.find({});
    res.send(data);
});

Router.route("/one/:mail").get(async(req,res)=>{
    const {mail } = req.params;
    
    const onedata = await Datagrid.findOne({mail: mail});
    res.send(onedata);
    console.log( "hi" + onedata);

    //  const updata = await Datagrid.updateOne({mail: mail});
});

Router.route("/create").post((req,res)=>{
    const {empname, mail, sales1, sales2} = req.body;
    
    const newdata = new Datagrid ({
        empname,
        mail,
        sales1,
        sales2
    });
    newdata.save();
});

Router.route("/update/:mail").put((req,res)=>{
    const {upd } = req.params;
    console.log(upd);


    // const {empname, mail} = req.body;
    
    // const newdata = new Datagrid ({
    //     empname,
    //     mail
    // });
    // newdata.save();
});

Router.route("/deletenote/:empname").delete((req,res)=>{
    const { empname } = req.params;
    console.log(empname);
    // console.log(req.body.data);
    // const heading = req.body.data;
    // const head = heading.tittle;
    // const head = heading.heading;

    Datagrid.deleteOne({empname:empname }).then(function(){
        console.log("Blog deleted"); // Success
     }).catch(function(error){
        console.log("Not deleted");
        console.log(empname);
         // Failure
     });

    

});

module.exports = Router;

// app.post("/deletenote", async (req, res)=>{
    
//     const heading = req.body.dnotes;
//     try{
//         Note.deleteOne({tittle:heading.tittle});

//   }catch(error){
//     console.log(error);
//   }
// });
