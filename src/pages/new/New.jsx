import {React,useState} from "react";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebars/Sidebar";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import "./new.scss";

function New({inputs,title}) {
   const [file,setFile]= useState("");
   
  return (
    <div className="New">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          {" "}
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src= {file? URL.createObjectURL(file):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJgwdOAjqaZGS7kn35IVm_ZN6E4XFuJ7V_g&usqp=CAU"}
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                <label htmlFor="file"> Image : <FileUploadIcon className ="icon"/> </label>
                <input type="file" onChange={e => setFile(e.target.files[0])} id="file" style={{display: "none"}}/>
              </div>

            {inputs.map((input) => ( <div className="formInput">
                <label htmlFor=""> {input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>))}
             
              
             
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
