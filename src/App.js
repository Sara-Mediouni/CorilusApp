import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

// layouts

import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import Dashboard from "./views/admin/Dashboard";
import Login from "./views/auth/Login";
import PatientsList from "./views/admin/Patients";
import Tables from "./views/admin/Tables";
import Settings from "./views/admin/Settings";
import Upload from "./views/admin/Upload";
import File from "./views/admin/FileAt";
import FileFacture from "./views/admin/FileFacture";


// views without layouts


function App() {
    return (

  <BrowserRouter>
    <Routes>
      {/* add routes with layouts */}
      

<Route path="/admin/dashboard" element={<Dashboard/>} ></Route>
<Route path="/admin/settings" element={<Settings/>} ></Route>
<Route path="/admin/tables" element={<Tables/>} ></Route>
<Route path="/admin/File/:id" element={<File/>} ></Route>
<Route path="/admin/FileFacture/:id" element={<FileFacture/>} ></Route>
<Route path="/admin/upload" element={<Upload/>} ></Route>
<Route path="/admin/patients" element={<PatientsList/>} >
    </Route>
       </Routes>
     
    <Routes> <Route path="/" element={<Login/>} /></Routes> 
      {/* add routes without layouts */}
    
 
  
  </BrowserRouter>
 
)}
export default App;
