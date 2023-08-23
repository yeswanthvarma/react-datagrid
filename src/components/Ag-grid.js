import React,{useEffect, useState} from "react";
import axios from "axios";
import{Link} from "react-router-dom"
import { AgGridReact } from "ag-grid-react";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';




function AgGrid (){
    const [records, setrecords]= useState([]);
    
    
    useEffect(()=>{
          axios.get('http://localhost:5050/data').then(res =>{
          const datagrid = res.data;
          setrecords(datagrid);
          })
        
    });
    const data = []

   
    records.map(d=>{
      data.push( {empname:d.empname, mail:d.mail, sales1:d.sales1, sales2:d.sales2});
    });

    const deletenote = async (params) => {
        try {
         const confirm= window.confirm( "Would like to Delete");
         if(confirm){
           const name= params.data;
           const empname= name.empname
            const response = await axios.delete(`http://localhost:5050/deletenote/${empname}`);
            console.log(response.data);}
         } catch (error) {
            console.error(error);
         }
       };


    

    


    
    const [columnDefs] = useState([
        { field: 'empname' },
        { field: 'mail' },
        { field: 'sales1' },
        { field: 'sales2' },
        {field:'Action',
         cellRenderer:params =>{
          return <button className="btn btn-sm btn-danger" 
          onClick = {()=>deletenote( params)}>DELETE</button>
          
        } 
        }
        
    ]);
   const defaultColDef= {
      editable: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      paginationAutoPageSize: true,
      pagination: true,
      
    }

    return(
        <div className="ag-theme-alpine " >
        <nav class="navbar navbar-expand-lg " >
        <a class="navbar-brand margin " ><h2><b>dataGrid</b></h2></a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav margin-left left">
        <li class="nav-item">
        <Link to="/create" className="btn btn-primary nav-link spacing">Create +</Link>
        </li>
        <li class="nav-item">
        <Link to="/graph" className="btn btn-primary ms-4 nav-link spacing ">Report</Link>
        </li>
        <li class="nav-item">
            <a class="nav-link spacing ms-4" href=""><i class="fa-solid fa-globe"></i> <b>www.amagi.com</b></a>
        </li>

    </ul>

 </div>
</nav>
      <div className='dataGrid' style={{height:800, width: 1000,}}>
      
        <AgGridReact
        rowData={records}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        />
      </div>
        
        </div>
    )
}

export default AgGrid;