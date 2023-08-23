
import React,{useState} from "react";
import '../App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
 

function Create (){
    const [newdata, setnewdata] = useState({
    empname:"",
    mail:"",
    sales1:"",
    sales2:""
});
 
const navigate = useNavigate();


function handelchange(event){
    const {name,value} = event.target;
    

    setnewdata(prevNote =>{
       return  {
        ...prevNote,
        [name]: value
       };
    })
}


function submitnote(event){ 
    
    
   axios.post("http://localhost:5050/create", newdata );
    navigate('/')

//    setnewdata({
//     empname:"",
//     mail: ""
// });

}

    
 return(
<div className="d-flex w-100 vh-100 justify-content-center align-items-center">
<div className="w-50 border bg-light p-5">

<div>
    <lable htmlfor="Name">EmployeName:</lable>
    <input className="form-control" type="text" value = {newdata.empname} onChange={handelchange} name="empname" placeholder="Name" />
</div>

<div>
    <lable htmlfor="email">Email:</lable>
    <input className="form-control" type="email" value = {newdata.mail} onChange={handelchange} name="mail" placeholder="Mail" />
</div>

<div>
    <lable >sales1:</lable>
    <input className="form-control"  value = {newdata.sales1} onChange={handelchange} name="sales1" placeholder="Enter sales1" />
</div>

<div>
    <lable >sales2:</lable>
    <input className="form-control"  value = {newdata.sales2} onChange={handelchange} name="sales2" placeholder="Enter sales2" />
</div>

<br/>

 <button className="btn btn-info" onClick= {submitnote}>create</button>
</div>  
</div>

    
    
)}

export default Create;
