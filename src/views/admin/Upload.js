import React from 'react'
import axios from 'axios';
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";

function Upload() {
    let [Files, setFiles] = React.useState([]);
    let [file, setFile] = React.useState([]);
    function getfiles(){
        axios.get('http://localhost:8080/files/all')
     .then(function (response) {
         setFiles(response.data);
     })
       }
    function upload(){
        const formData = new FormData();
        formData.append("file", file);
        formData.append("status", "à traiter");
        axios.post('http://localhost:8080/files/upload',formData)
        .then(function (response) {
          console.log(response);
        })
      }
  return (
   <div>
    <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
     <div class=" font-sans text-gray-900 bg-blueGray-100 border-box">
    <div style={{height:"600px"}}class="flex justify-center w-full mx-auto sm:max-w-lg">

        <div  class="flex flex-col items-center justify-center w-full  my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
            <div class="mt-10 mb-10 text-center">
                <h2 class="text-2xl font-semibold mb-2">Upload your file</h2>
                <p class="text-xs text-gray-500">File should be of format .txt</p>
            </div>
            <form onSubmit={(e) => {
  upload();
  getfiles();}
  } class="relative w-4/5 h-32 max-w-xs mb-10  bg-gray-100 rounded-lg shadow-inner">
                <input type="file" id="file-upload" class="hidden" onChange={(e)=>setFile(e.target.files[0])}/>
                <label for="file-upload" class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                    <p class="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your file here</p>
                    <svg class="z-10 w-8 h-8 text-lightBlue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                </label>
                <button style={{marginLeft:"110px"}}class="mx-5 mt-6 justify-center inline-block rounded bg-lightBlue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"type="submit">Upload</button>
            </form>
        </div>
    </div>
</div>
   
   <FooterAdmin />
        </div>
      </div>
  )
}

export default Upload