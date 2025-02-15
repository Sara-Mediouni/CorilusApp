import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';

import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import "./Files.css";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from "../../components/Sidebar/Sidebar.js";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableCell: {
    
    width: '20px',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
  }, 
  Errors: {
    
    color:"#d62828"
  },
});


function File() {
  let {id}=useParams();
  const [recordRejet,setRecordRejet] = React.useState([]);
  const [Errors,setErrors] = React.useState([]);
  const [type,setType] = React.useState("");
  const [type10Error,setType10Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type20Error,setType20Error] = React.useState([{code:'',lettre:'',libelle:'',nom_zone:''}]);
  const [type30Error,setType30Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type40Error,setType40Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type50Error,setType50Error] = React.useState([{code:'',lettre:'',libelle:'',nom_zone:''}]);
  const [type51Error,setType51Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type52Error,setType52Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type80Error,setType80Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type90Error,setType90Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type95Error,setType95Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type96Error,setType96Error] = React.useState([{code:'',lettre:'',libelle:''}]);
  const [type200,setType200] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type300,setType300] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type10,setType10] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type20,setType20] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type30,setType30] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type40,setType40] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type50,setType50] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type52,setType52] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type51,setType51] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type80,setType80] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type90,setType90] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type95,setType95] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);
  const [type96,setType96] = React.useState([{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}]);

  // Inside your component
const classes = useStyles();
  function getById() {
    axios
      .get(`http://localhost:8080/files/${id}`)
      .then(function (response) {
        const recordRejetArray = response.data.recordRejet;
        console.log(recordRejetArray);
       
    

        // Iterate over the array
        for (let i = 0; i < recordRejetArray.length; i++) {
          const object = recordRejetArray[i];
  
          // Check if the object has a "type" property and its value is "200"
          switch (object.type) {
            case "200":
              // Object with type="200" found
              const extractedObject200 = object;
              setType200(extractedObject200.zone);
             
              // Perform any additional actions with the extracted object here
              // ...
              break;
          
            case "300":
              // Object with type="300" found
              const extractedObject300 = object;
              setType300(extractedObject300.zone);
             
              // Perform any additional actions with the extracted object here
              // ...
              break;
            case "10":
                // Object with type="10" found
                const extractedObject10 = object;
                setType10(extractedObject10.zone);
                const zoneErreur1 = extractedObject10.zoneErreur;
                setType10Error(zoneErreur1);
                

                
                // Perform any additional actions with the extracted object here
                
                // ...
                break;
              
            case "20":
                  // Object with type="20" found
                  const extractedObject20 = object;
                  setType20(extractedObject20.zone);
                  const zoneErreur2 = extractedObject20.zoneErreur;
                  setType20Error(zoneErreur2);
                  
                
                  
                  // Perform any additional actions with the extracted object here
                  // ...
                  break;
                  case "30":
                    // Object with type="30" found
            const extractedObject30 = object;
                    setType30(extractedObject30.zone);
                    const zoneErreur3 = extractedObject30.zoneErreur;
                    setType30Error(zoneErreur3);
                  

                    
                    // Perform any additional actions with the extracted object here
                    // ...
                    break;
            case "40":
                      // Object with type="40" found
                      const extractedObject40 = object;
                      setType40(extractedObject40.zone);
                      const zoneErreur4 = extractedObject40.zoneErreur;
                      setType40Error(zoneErreur4);
                    

                      
                      // Perform any additional actions with the extracted object here
                      // ...
                      break;
            case "50":
                        // Object with type="50" found
                        const extractedObject50 = object;
                        setType50(extractedObject50.zone);
                        const zoneErreur = extractedObject50.zoneErreur;
                        setType50Error(zoneErreur);
                       

                        
                        
                    
                        
                        // Perform any additional actions with the extracted object here
                        // ...
                        break;
            case "51":
                          // Object with type="51" found
                          const extractedObject51 = object;
                          setType51(extractedObject51.zone);
                          const zoneErreur51 = extractedObject51.zoneErreur;
                        setType51Error(zoneErreur51);
                       

                        
                          // Perform any additional actions with the extracted object here
                          // ...
                          break;
            case "52":
                            // Object with type="52" found
                            const extractedObject52 = object;
                            setType52(extractedObject52.zone);
                            const zoneErreur52 = extractedObject52.zoneErreur;
                            setType52Error(zoneErreur52);
                            
    
                            
                            // Perform any additional actions with the extracted object here
                            // ...
                            break;
              
            case "80":
                              // Object with type="80" found
                              const extractedObject80 = object;
                              setType80(extractedObject80.zone);
                              const zoneErreur80 = extractedObject80.zoneErreur;
                              setType80Error(zoneErreur80);
                              
      
                              // Perform any additional actions with the extracted object here
                              // ...
                              break;
            case "90":
                                // Object with type="90" found
                                const extractedObject90 = object;
                                setType90(extractedObject90.zone);
                                const zoneErreur90 = extractedObject90.zoneErreur;
                                setType90Error(zoneErreur90);
                              
        
                                
                                // Perform any additional actions with the extracted object here
                                // ...
                                break;
            case "95":
                                  // Object with type="95" found
                                  const extractedObject95 = object;
                                  setType95(extractedObject95.zone);
                                  const zoneErreur95 = extractedObject95.zoneErreur;
                                  setType95Error(zoneErreur95);
                                  
          
                                  // Perform any additional actions with the extracted object here
                                  // ...
                                  break; 
            case "96":
                                    // Object with type="96" found
                                    const extractedObject96 = object;
                                    setType96(extractedObject96.zone);
                                    const zoneErreur96 = extractedObject96.zoneErreur;
                                    setType96Error(zoneErreur96);
                                  
            
                                    // Perform any additional actions with the extracted object here
                                    // ...
                                    break;
            default:
              // Handle cases where the object type is neither "200" nor "300"
              // ...
              break;
          }

        }
  
        setType(response.data.fileType);
      });
  }

  

 useEffect(() => 
  {getById();
   console.log(type20Error);
   console.log(type20);
  
  })

     
     

  

    return (
      <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
      
   <div
   style={{marginTop:"100px"}}>
   <div style={{borderBottom:"#adb5bd 1px solid"}} className="bg-gray-100 md:pt-18 pb-5 pt-5 mx-10 border-b-gray-500">
   <ul className="files-type">
    <li className={type==="FACTURE" ? "file":"file-type"}>920000</li>
    <li className="file-type">920999</li>
    <li className={type==="FACTURE_REJETÉE" ? "file" : "file-type"}>920099</li>
    <li className="file-type">920900</li>
   </ul>
    </div>
    <div className="px-4 md:px-10 mx-auto w-full">
      <div style={{marginTop:"80px",marginBottom:"100px"}}>
      <h1 style={{marginBottom:"50px"}}> Entête </h1>
      <h1 style={{marginTop:"50px"}}>Segment 200</h1>
      <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
          {
            Object.keys(type200).map((t)=>
            {
              return (
                <TableCell style={{color:"#6c757d"}} align="center" >{type200[t]?.zoneEmbedded?.nom_zone}-{type200[t]?.zoneEmbedded?.desription}</TableCell>
              )
            })
          }
            </TableRow>
        </TableHead>
        <TableBody>
        {
            Object.keys(type200).map((t)=>
            {
              return (
           
              <TableCell component="th" scope="row" align="center">
                {type200[t]?.contenu}
              </TableCell>
              
            
             
           
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Segment 300</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
          {
            Object.keys(type300).map((t)=>
            {
              return (
                <TableCell style={{color:"#6c757d"}} align="center" >{type300[t]?.zoneEmbedded?.nom_zone}-{type300[t]?.zoneEmbedded?.desription}</TableCell>
              )
            })
          }
            

          </TableRow>
        </TableHead>
        <TableBody>
        {
            Object.keys(type300).map((t)=>
            {
              return (
           
              <TableCell component="th" scope="row" align="center">
                {type300[t]?.contenu}
              </TableCell>
              
            
             
           
          )})}
            
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Détails de la facture</h1>
    {type10  && (type10[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 10</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type10).map((t) => { 
                const nomZone=type10[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type10Error).map((t) =>
    ( 
    nomZone === type10Error[t].nom_zone)
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type10[t]?.zoneEmbedded?.nom_zone}-
                  {type10[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type10).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type10[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type10Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type10Error[t].code}] {type10Error[t].libelle}</h1>
        ))
      }
    </>
 )
}




   
  
   
{type20  && (type20[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 20</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type20).map((t) => { 
                const nomZone=type20[t]?.zoneEmbedded?.nom_zone;
             
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type20Error).map((t) =>
  
    nomZone === type20Error[t].nom_zone
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type20[t]?.zoneEmbedded?.nom_zone}-
                  {type20[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type20).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type20[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type20Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type20Error[t].code}] {type20Error[t].libelle}</h1>
        ))
      }
    </>
 )
}
   
{type30  && (type30[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 30</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type30).map((t) => { 
                const nomZone=type30[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type30Error).map((t) =>
  ( 
    nomZone === type30Error[t].nom_zone)
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type30[t]?.zoneEmbedded?.nom_zone}-
                  {type30[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type30).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type30[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type30Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type30Error[t].code}] {type30Error[t].libelle}</h1>
        ))
      }
    </>
 )
}
    
{type40 &&  (type40[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 40</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type40).map((t) => { 
                const nomZone=type40[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type40Error).map((t) =>
  ( 
    nomZone === type40Error[t].nom_zone)
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type40[t]?.zoneEmbedded?.nom_zone}-
                  {type40[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type40).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type40[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type40Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type40Error[t].code}] {type40Error[t].libelle}</h1>
        ))
      }
    </>
 )
}
    
{type50 &&  (type50[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 50</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {Object.keys(type50).map((t) => { 
                const nomZone=type50[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type50Error).map((t) =>
  ( 
    nomZone === type50Error[t].nom_zone)
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type50[t]?.zoneEmbedded?.nom_zone}-
                  {type50[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type50).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type50[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
  
      {
        Object.keys(type50Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type50Error[t].code}] {type50Error[t].libelle}</h1>
        ))
      }
    
    </>
 )
} 

{type51  && (type51[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 51</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type51).map((t) => { 
                const nomZone=type51[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type51Error).map((t) =>
  ( 
    nomZone === type51Error[t].nom_zone)
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type51[t]?.zoneEmbedded?.nom_zone}-
                  {type51[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type51).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type51[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type51Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type51Error[t].code}] {type51Error[t].libelle}</h1>
        ))
      }
    </>
 )
}
{type52  && (type52[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 52</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type52).map((t) => { 
                const nomZone=type52[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type52Error).map((t) =>
  ( 
    nomZone === type52Error[t].nom_zone)
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type52[t]?.zoneEmbedded?.nom_zone}-
                  {type52[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type52).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type52[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type52Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type52Error[t].code}] {type52Error[t].libelle}</h1>
        ))
      }
    </>
 )
}
{type80  && (type80[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 80</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type80).map((t) => { 
                const nomZone=type80[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type80Error).map((t) =>
  ( 
    nomZone === type80Error[t].nom_zone)
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type80[t]?.zoneEmbedded?.nom_zone}-
                  {type80[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type80).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type80[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type80Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type80Error[t].code}] {type80Error[t].libelle}</h1>
        ))
      }
    </>
 )
}
    
{type90  && (type90[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 90</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type90).map((t) => { 
                const nomZone=type90[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type90Error).map((t) =>
  ( 
    nomZone === type90Error[t].nom_zone)
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type90[t]?.zoneEmbedded?.nom_zone}-
                  {type90[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type90).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type90[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type90Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type90Error[t].code}] {type90Error[t].libelle}</h1>
        ))
      }
    </>
 )
}
   
{((type95  && (type95[0].contenu !== ''))||(type96  && (type96[0].contenu !== '')))&&
 ( 
    <>
    <h1 style={{ marginTop: "50px" }}>Bas de la facture</h1>
      
    </>
 )
}
{type95  && (type95[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 95</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type95).map((t) => { 
                const nomZone=type95[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type95Error).map((t) =>
    (type95Error[t].code.substring(2, 3) === '0' &&
    nomZone === type95Error[t].code.substring(4, 5)) ||  (type95Error[t].code.substring(2, 3) !== '0' &&
    nomZone === type95Error[t].code.substring(3, 5))
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type95[t]?.zoneEmbedded?.nom_zone}-
                  {type95[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type95).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type95[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type95Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type95Error[t].code}] {type95Error[t].libelle}</h1>
        ))
      }
    </>
 )
}
{type96  && (type96[0].contenu !== '')&&
 ( 
    <>
      <h1 style={{ marginTop: "50px" }}>Enregistrement de type 96</h1>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
          <TableHead>
          <TableRow>
              {Object.keys(type96).map((t) => { 
                const nomZone=type96[t]?.zoneEmbedded?.nom_zone;
                return(
                 
                <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(type96Error).map((t) =>
    (type96Error[t].code.substring(2, 3) === '0' &&
    nomZone === type96Error[t].code.substring(4, 5)) ||  (type96Error[t].code.substring(2, 3) !== '0' &&
    nomZone === type96Error[t].code.substring(3, 5))
      ? '#d62828'
      : ''
  ),
}} align="center">
                  {type96[t]?.zoneEmbedded?.nom_zone}-
                  {type96[t]?.zoneEmbedded?.desription}
                </TableCell>
 )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(type96).map((t) => (
              <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                {type96[t]?.contenu}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        Object.keys(type96Error).map((t) => (
          <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{type96Error[t].code}] {type96Error[t].libelle}</h1>
        ))
      }
    </>
 )
}

   
    
      </div>
    </div>

   </div>
 
    <FooterAdmin />
        </div>
      </div>
      </>
  )
}

export default File