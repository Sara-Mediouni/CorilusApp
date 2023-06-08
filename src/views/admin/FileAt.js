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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { kebabCase } from 'lodash';

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
  const [attestation,setAttestation] = React.useState([{content:'',type:'',zone:[{contenu:'',zoneEmbedded:{longueur:'',desription:'',nom_zone:''}}],zoneErreur:[]}])
  const [showTables, setShowTables] = React.useState(false);

  // Inside your component
const classes = useStyles();
const toggleTables = () => {
    setShowTables(!showTables);
  };

  function getById() {
    axios
      .get(`http://localhost:8080/files/${id}`)
      .then(function (response) {
        const recordRejetArray = response.data.recordRejet;
        console.log(recordRejetArray);
       
        let attestation1=[]
        let attestationArray=[];
        
        let prestationArray=[];
    

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
                  attestationArray.push(extractedObject20);

                  
                
                  
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
                        prestationArray.push(extractedObject50);
                        const objectsucc=recordRejetArray[i+1]
                        if (objectsucc.type==="51")
                        { prestationArray.push(objectsucc);
                            attestationArray.push(prestationArray);
                            prestationArray=[]
                        }
                       else {
                      
                          attestationArray.push(prestationArray);
                          prestationArray=[]
                        
                        
                            
    
                       }

                        
                        
                    
                        
                        // Perform any additional actions with the extracted object here
                        // ...
                        break;
            case "51":
                          // Object with type="51" found
                          const extractedObject51 = object;
                         
                        prestationArray.push(extractedObject51);
                        attestationArray.push(prestationArray);
                        prestationArray=[];

                        
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
                              attestationArray.push(extractedObject80);
                              attestation1.push(attestationArray)
                           attestationArray=[];
                              
      
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
          setAttestation(attestation1);
        console.log(attestation1)
         
           
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
    {attestation && Object.keys(attestation).map((t,index) => (
    <div style={{marginTop:"50px"}}key={index}>
   { showTables ?(<h1><i style={{color: "#1b9d42"}} class="fa-sharp fa-solid fa-chevron-up" onClick={toggleTables}></i> Attestation {index+1}</h1>
   ):(<h1><i style={{color: "#1b9d42"}} class="fa-sharp fa-solid fa-chevron-down" onClick={toggleTables}></i> Attestation {index+1}</h1>)
   }
    
    <div>
  {showTables && Object.keys(attestation[t]).map((attkey, index) => (
    <React.Fragment key={index}>
      {attestation[t][attkey].type && attestation[t][attkey]?.type ? (
        <div>
          <h1 style={{ marginTop: "50px" }}>Enregistrement de type {attestation[t][attkey]?.type}</h1>
          <TableContainer component={Paper} style={{ marginTop: "50px" }}>
            <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {attestation[t][attkey]?.zone &&
                    Object.keys(attestation[t][attkey]?.zone).map((k) => {
                      const nomZone=attestation[t][attkey]?.zone[k]?.zoneEmbedded?.nom_zone;
             
                return(
                      <TableCell className={classes.tableCell} 
 style={{
  color: Object.keys(attestation[t][attkey]?.zoneErreur).map((h) =>
  
    nomZone === attestation[t][attkey]?.zoneErreur[h]?.nom_zone
      ? '#d62828'
      : ''
  ),
}}  align="center" key={k}>
                        {attestation[t][attkey].zone[k]?.zoneEmbedded?.nom_zone}-
                        {attestation[t][attkey].zone[k]?.zoneEmbedded?.desription}
                      </TableCell>
                    )})}
                </TableRow>
              </TableHead>
              <TableBody>
                {attestation[t][attkey]?.zone &&
                  Object.keys(attestation[t][attkey]?.zone).map((k) => (
                    <TableCell className={classes.tableCell} component="th" scope="row" align="center" key={k}>
                      {attestation[t][attkey]?.zone[k]?.contenu}
                    </TableCell>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {
        Object.keys(attestation[t][attkey]?.zoneErreur).map((l) => (
         <div> <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{attestation[t][attkey]?.zoneErreur[l]?.code}] {attestation[t][attkey]?.zoneErreur[l]?.libelle}</h1>
         <h1 className={classes.Errors} style={{marginTop:"50px"}}>Erreur dans la zone [{attestation[t][attkey]?.zoneErreur[l]?.nom_zone}]</h1>
        </div>
        ))
      }
        </div>
      ) : (
        <>
          <div style={{ marginTop: "50px" }} key={index}>
            <h1>
              <i
                style={{ color: "#1b9d42" }}
                className="fa-sharp fa-solid fa-chevron-down"
                onClick={toggleTables}
              ></i>{" "}
              Prestation {index}
            </h1>
            <div>
              {Object.keys(attestation[t][attkey]).map((a, indexprestation) => (


                <div key={indexprestation}>
                  <h1 style={{ marginTop: "50px" }}>Enregistrement de type {attestation[t][attkey][a]?.type}</h1>
                  <TableContainer component={Paper} style={{ marginTop: "50px" }}>
                    <Table sx={{ minWidth: 700 }} size="medium" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          {attestation[t][attkey][a]?.zone &&
                            Object.keys(attestation[t][attkey][a]?.zone).map((k) => {
                              const nomZone=attestation[t][attkey][a]?.zone[k]?.zoneEmbedded?.nom_zone;
             
             return(
                   <TableCell className={classes.tableCell} 
style={{
color: Object.keys(attestation[t][attkey][a]?.zoneErreur).map((h) =>

 nomZone === attestation[t][attkey][a]?.zoneErreur[h]?.nom_zone
   ? '#d62828'
   : ''
),
}}  align="center" key={k}>
                              
                               
                                {attestation[t][attkey][a].zone[k]?.zoneEmbedded?.nom_zone}-
                                {attestation[t][attkey][a].zone[k]?.zoneEmbedded?.desription}
                              </TableCell>
                           )})}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {attestation[t][attkey][a]?.zone &&
                          Object.keys(attestation[t][attkey][a]?.zone).map((k) => (
                            <TableCell
                              className={classes.tableCell}
                              component="th"
                              scope="row"
                              align="center"
                              key={k}
                            >
                              {attestation[t][attkey][a]?.zone[k]?.contenu}
                            </TableCell>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {
        Object.keys(attestation[t][attkey][a]?.zoneErreur).map((l) => (
        <div>  <h1 className={classes.Errors} style={{marginTop:"50px"}}>[{attestation[t][attkey][a]?.zoneErreur[l]?.code}] {attestation[t][attkey][a]?.zoneErreur[l]?.libelle}</h1>
      
        <h1 className={classes.Errors} style={{marginTop:"50px"}}>Erreur dans la zone [{attestation[t][attkey][a]?.zoneErreur[l]?.nom_zone}]</h1> </div>
        ))
      }
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  ))}
</div>
 </div>
    ))
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