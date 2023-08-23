import React, {useEffect, useState} from 'react';
import axios from 'axios';
import{Link} from "react-router-dom"
import DataTable from 'react-data-table-component';


function RDGC() {

const [records, setrecords]= useState([]);
const [fRecord, setFliter]= useState("");

useEffect(()=>{
      axios.get('http://localhost:5050/data').then(res =>{
      const datagrid = res.data;
      setrecords(datagrid);
      })
    
});

const deletenote = async (empname) => {
   try {
    const confirm= window.confirm("Would like to Delete");
    if(confirm){
       const response = await axios.delete(`http://localhost:5050/deletenote/${empname}`);
       console.log(response.data);}
    } catch (error) {
       console.error(error);
    }
  };

//   const onChange = async (e) => {
//     setFliter(e.target.value);
//     console.log(e);
//     var searchData = records.filter((item) => {
//       if (
//         item.empname
//           .includes(e.target.value.toLowerCase())
//       ) {
//         return item;
//       }
//     });
//     setrecordsmain(searchData);
//   };

const flist=[]
const handleFliter= (event)=>{ 
    setFliter(event.target.value);

let positive_array = records.map(value=> value.empname = fRecord );
        console.log(positive_array)
        setrecords(positive_array)
}



const columns=[
    {
        name:'Name',
        selector:row => row.empname,
        sortable:true
    },
    {
        name:'Email',
        selector:row => row.mail
       
    },
    {
        name:'Sales1',
        selector:row => row.sales1,
        sortable:true
    },
    {
        name:'Sales2',
        selector:row => row.sales2,
        sortable:true
    },
    {
        name:'Actiion',
        selector:null,
        cell: (d) =>[
            <button className="btn btn-sm btn-danger" onClick = {e =>deletenote(d.empname)}>DELETE</button>
        ]
    }
]


 return(
<div className='container mt-5'>
    <div>
      <Link to="/create" className="btn btn-primary">Create +</Link>
      <Link to="/graph" className="btn btn-primary ms-2">Report</Link>
      <div style={{display: 'flex', justifyContent: 'right'}}>
        <input value={fRecord} style={{padding:'6px 10px'}} type='text' placeholder='Search...' onChange={handleFliter}></input>
        
      </div>
    </div>



    <DataTable
        columns={columns}
        data={records}

    ></DataTable>
</div>
    )
}

export default RDGC;