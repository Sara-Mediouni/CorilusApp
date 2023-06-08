import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Tables.css"
import { useNavigate } from 'react-router-dom';

export default function PatientsList() {
  const [anchorEl, setAnchorEl] = React.useState(null);
const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const routeChange = (id, fileType) => { 
    let path;
    
    switch (fileType) {
      case "FACTURE_REJETÉE":
        path = `/admin/File/${id}`;
        break;
      case "FACTURE":
        path = `/admin/FileFacture/${id}`;
        break;
      default:
        path = `/admin/File/${id}`;
        break;
    }
    
    navigate(path);
  }
  
  /*function deletefile(id){
    axios.delete(`http://localhost:8080/files/${id}`)
 .then(function (response) {
   console.log(response);
 })
   }*/

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
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
    field: 'Name',
    headerName: 'Name',
    width: 300,
    editable: true,
  },
  {
   field: 'Status',
   headerName: 'Status',
   width: 270,
   editable: true,
   renderCell: (params)  => {
    if (params.value === "UPLOADED") {
    return (
      <span style={{height:'30px',width:'100px',padding:'5px',borderRadius:'5px',alignItems:'center'}} className='text-center bg-lightBlue-300 text-lightBlue-600'>Uploaded</span>
    );
   }
 }}
 ,
  {
   field: 'Type',
   headerName: 'Type',
   width: 270,
   editable: true,
 },
 {
  field: 'Actions',
  headerName: 'Actions',
  width: 250,
  editable: true,
  renderCell: (params)  => {
    return(
      <div>
      <IconButton className="fa-sharp fa-solid fa-ellipsis-vertical" aria-describedby={id} variant="contained" onClick={()=>routeChange(params.id,params.row.Type)}>
      
      </IconButton>
      
</div>
  )}
}
];

const rows = Files?.map((f) => {
  
  return {
   
    id:f.id,
    Name:f.fileName,
    Type:f.fileType,
    Status:f.status
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
