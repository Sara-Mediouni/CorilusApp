import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";


export default function PatientsList() {
  let [Files, setFiles] = React.useState([]);
  function getfiles(){
   axios.get('http://localhost:8080/files/all')
.then(function (response) {
	setFiles(response.data);
})
  }
  React.useEffect(() => 
  {getfiles();
    console.log(Files)
  }, []); 
 const columns = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
    field: 'Last Name',
    headerName: 'Last Name',
    width: 200,
    editable: true,
  },
  {
   field: 'First Name',
   headerName: 'First Name',
   width: 250,
   editable: true,
 }
 ,
  {
   field: 'Birthday',
   headerName: 'Birthday',
   width: 250,
   editable: true,
 }
];

const rows = Files?.map((f) => {
  
  return {
   
    id:f.id,
    Name:f.fileName,
  };});

 
  return (
    <>
    <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      {/* Header */}
      <HeaderStats />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
    <Box sx={{ height: 400, width: '100%',backgroundColor:"#fff",marginTop:20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <FooterAdmin />
        </div>
      </div>
      </>
  );
}
