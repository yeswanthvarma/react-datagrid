import React, {useEffect, useState} from 'react';
import axios from 'axios';
import{Link} from "react-router-dom"
function App() {
  
  const [records, setrecords]= useState([]);

useEffect(()=>{
  axios.get('http://localhost:5050/data').then(res =>{
  const datagrid = res.data;
  setrecords(datagrid);

  })

});
console.log(records);

const deletenote = async (empname) => {
  try {
     const response = await axios.delete(`http://localhost:5050/deletenote/${empname}`);
     console.log(response.data);
  } catch (error) {
     console.error(error);
  }
};




  return (
    <div className='container mt-5'>
    <div>
      <Link to="/create" className="btn btn-primary">Create +</Link>
      <Link to="/graph" className="btn btn-primary ms-2">Report</Link>
    </div>
    <table className='table'>
    <thead>
      <tr>
        <th>Empname</th>
        <th>Email</th>
        <th>Sales1</th>
        <th>Sales2</th>
        <th>Action</th>

      </tr>
      
    </thead>
    <tbody>
    { records.map((d,i)=>
      <tr key ={i}>
      <td>{d.empname}</td>
        <td>{d.mail}</td>
        <td>{d.sales1}</td>
        <td>{d.sales2}</td>

        <td>
        <div>
        {/* <Link to= {`/update/${d.mail}`} className="btn btn-sm btn-success">Update</Link> */}
        <button className="btn btn-sm btn-danger" onClick = {e =>deletenote(d.empname)}>DELETE</button>
        </div>
        </td>
      </tr>
    )
    }

    </tbody>
    </table>
      
    </div>
  );
}

export default App;
