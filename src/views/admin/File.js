import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import Table from '@mui/material/Table';
import "./Files.css";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
function File() {
  let {id}=useParams();
  const [recordRejet,setRecordRejet] = React.useState([]);
  const [type,setType] = React.useState("");
  const [type200,setType200] = React.useState([{id:0}]);
  const [name200,setName200] = React.useState("");
  const [version200,setVersion200] = React.useState("");
  const [statut200,setStatut200] = React.useState("");
  const [ttype200,setTType200] = React.useState("");
  const [reference200,setReference200] = React.useState("");
  const [referenceOA200,setReferenceOA200] = React.useState("");
  const [type300,setType300] = React.useState([{id:0}]);
  const [anneeetmois300,setAnneeetmois200] = React.useState("");
  const [codeErreur3001,setCodeErreur3001] = React.useState("");
  const [NumEnvoi301,setNumEnvoi301] = React.useState("");
  const [codeErreur3011,setCodeErreur3011] = React.useState("");
  const [DateCreation302,setDateCreation3021] = React.useState("");
  const [CodeErreur3021,setCodeErreur3021] = React.useState("");
  const [ReferenceFacture303,setReferencefacture303] = React.useState("");
  const [CodeErreur3031,setCodeErreur3031] = React.useState("");
  function getById(){
    axios.get(`http://localhost:8080/files/${id}`)
  .then(function (response) {
    setRecordRejet(response.data.recordRejet[0]);
     console.log(response.data.recordRejet)
    setType(response.data.fileType);
    setType200(response.data.recordRejet[0].zone);
    setType300(response.data.recordRejet[1].zone);
    
  })
  }
function segment200(){
  setName200(type200[0]);

    setVersion200(type200[1]);
    setStatut200(type200[2]);
    setTType200(type200[3]);
    setReference200(type200[4]);
    setReferenceOA200(type200[5]);
}
function segment300(){
  setName200(type200[0]);

    setVersion200(type200[1]);
    setStatut200(type200[2]);
    setTType200(type200[3]);
    setReference200(type200[4]);
    setReferenceOA200(type200[5]);
}
 useEffect(() => 
  {getById();
  segment200();
    
  }, []); 
  function createData(name, version, type, statut, reference,referenceOA) {
    return { name, version, type, statut, reference,referenceOA };
  }
  const rows = [
    createData(name200?.contenu,version200?.contenu, ttype200?.contenu, statut200?.contenu, reference200?.contenu, referenceOA200?.contenu),
  ];
  return (
   
   <div>
   <div style={{borderBottom:"#adb5bd 1px solid"}} className="bg-gray-100 md:pt-18 pb-5 pt-5 mx-10 border-b-gray-500">
   <ul className="files-type">
    <li className={type==="FACTURE" ? "file":"file-type"}>920000</li>
    <li className="file-type">920999</li>
    <li className={type==="FACTURE_REJETÉE" ? "file" : "file-type"}>920099</li>
    <li className="file-type">920900</li>
   </ul>
    </div>
    <div className="px-4 md:px-10 mx-auto w-full">
      <div style={{marginTop:"80px"}}>
      <h1 style={{marginBottom:"50px"}}> Entête </h1>
      <h1 style={{marginTop:"50px"}}>Segment 200</h1>
      <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Segment 300</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >300-Année et mois de facturation</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >3001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">301-N° d'envoi</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >3011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">302-Date de création de la facture</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >3021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">303-Référence facture</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >3031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">304-N° de version des instructions</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >3041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">305-Nom de la personne de contact</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >3051-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">306-Prénom de la personne de contact</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >3061-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">307-N° de téléphone de la personne de contact</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >3071-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">308-Type de facture</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >3081-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">309-Mode de facturation</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >3091-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">310-Pourcentage erreurs</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >3101-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">311-Type refus facturation</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >3111-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">3012-Réserve</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Détails de la facture</h1>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 10</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 20</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 30</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 40</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 50</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 51</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 52</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 80</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 90</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Bas de la facture</h1>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 95</h1>
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 style={{marginTop:"50px"}}>Enregistrement de type 96</h1>
    <TableContainer component={Paper} style={{marginTop:"50px",margingBootom:"80px"}}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell style={{color:"#6c757d"}} align="center" >200-Nom du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2001-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">201-N°version</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2011-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">202-Type de message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2021-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">203-Statut du message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2031-Code erreur</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center">204-Référence message</TableCell>
            <TableCell style={{color:"#6c757d"}} align="center" >2041-Code erreur</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center">205-Référence message OA</TableCell>
          <TableCell style={{color:"#6c757d"}} align="center" >2051-Code erreur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.version}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.referenceOA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
      </div>
    </div>

   </div>
  
  )
}

export default File