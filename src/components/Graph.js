import { useEffect, useState } from "react";
import React from "react";
import Chart from "react-apexcharts";
import axios from "axios";


function Graph(){

const [record, setrecords]= useState([]);





    
let series =[]

useEffect(()=>{
  axios.get('http://localhost:5050/data').then(res =>{
  const datagrid = res.data;
  setrecords(datagrid);
//   console.log(record);
  
  record.map((d,i)=>{
    const a ={
        name : String(d.empname),
        data : [ parseInt(d.sales),parseInt(d.sales)+123]
    }
    
    return series.push(a);
  });
  })

});
    return(
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
<Chart 
    type="bar"
    width = {600}
    height={600}
    
    
    series={series? "es":"no"
    //     {
    //         name: "hi",
    //         data: [1234, 1666, 2333]
    //     },
    //     {
    //         name: "abcd",
    //         data: [1666, 1322, 1232]
    //     }
    // ]
    }

    options={{
        colors:['#F44336', '#E91E63', '#9C27B0']
    }}
    
    
    >
    
</Chart>

    </div>
)}

export default Graph;