import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App.js";
import Create from "./Create.js";
import Update from "./Update.js";
import Delete from "./Delete.js";
// import Graph from "./Graph.js";
import Chartjs from "./Chartjs.js";
import RDGC from "./RDGC.js";
import AgGrid from "./Ag-grid.js";

function AppRouter(){
    return(
        <div>
           <BrowserRouter>
            
            <Routes>
                <Route path = '/' element ={<AgGrid/>} />
                <Route path = '/create' element ={<Create/>}/>
                <Route path = '/graph' element ={<Chartjs/>}/>
                <Route path = '/update/:mail' element ={<Update/>}/>
                {/* <Route path = '/delete/:empname' element ={<Delete/>}/> */}
            </Routes>
           </BrowserRouter> 
        </div>
    )
}


export default AppRouter;