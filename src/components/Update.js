import React ,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


 function Update(){
    const {mail} = useParams();
    const [upd, setupdate]= useState({});

useEffect(()=>{
 axios.get(`http://localhost:5050/one/${mail}`).then(res =>{
  const data = JSON.stringify( res.onedata );
  
  setupdate(data);
  console.log("b" +data);

  });

});
  

    function handelchange(event){
        const {name,value} = event.target;
        
    
        setupdate(prevNote =>{
           return  {
            ...prevNote,
            [name]: value
           };
        })
    }
    
    
    async function submit(event){ 

        axios.put(`http://localhost:5050/update/${mail}` ,{
            empname:upd.empname,
            mail:upd.mail,
            sales:upd.sales
          })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.error(error);
            });


            
        
    // const response = await axios.put(`http://localhost:5050/update/${mail}`
    //         .then(response => console.log(response.data))
    //         .catch(error => console.error(error));
         
    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
<div className="w-50 border bg-light p-5">
<div>
    <lable htmlfor="Name">EmployeName:</lable>
    <input className="form-control" type="text" value = {"upd.empname"} onChange={handelchange} name="empname" placeholder="Name" />
</div>
<div>
    <lable htmlfor="email">Email:</lable>
    <input className="form-control" type="email" value = {"upd.mail"} onChange={handelchange} name="mail" placeholder="Mail" />
</div><br/>
<button className="btn btn-info" onClick= {submit}>create</button>
</div>  
    
 </div>
    
     
    )
}

export default Update;