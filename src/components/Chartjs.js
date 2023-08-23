import {Bar} from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import axios from "axios";
import React,{useState, useEffect} from "react";


function Chartjs (){
    const [record, setrecords]= useState([]);

    useEffect(()=>{
    axios.get('http://localhost:5050/data').then(res =>{
        const datagrid = res.data;
        setrecords(datagrid);
        console.log(record.sales1)
    })});

    const labels = [];
    const data1 =[];
    const data2 =[];

    const data = {
        labels,
        datasets:[
            {
             lable: 'Sales-2',
             data:data2,
             backgroundColor:'pink'
            },
            
            
        ]
    };
    
        

record.map((d,i) => {

    labels.push(String(d.empname));
    data2.push(parseInt(d.sales2));
    data1.push(parseInt(d.sales1));
});

      

    
// console.log(label);
// console.log(data);
    
return(
    <div className=" justify-content-center align-items-center"
    style={{'height':500,'width':800 }}>
      <Bar data={data}></Bar>
    </div>
    )
}

export default Chartjs;
