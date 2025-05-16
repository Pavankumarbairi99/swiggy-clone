import { useState,useContext } from "react";
import userContext from "../utils/userContext";
import { Link } from "react-router-dom";
const LoginFrom=()=>{
    let [userid,setuserid]=useState("")
    let sucess="";
    let failed="";
    const {setlogIn}=useContext(userContext);
    let adduserid=()=>{
       
        setlogIn(userid)
    }
  
    return(
        <div className="login-container">
            <div className="login-form">
            <h2 className="my-3">Login Details</h2>

                <div>
                <label>
                    User Name
                </label>
                <input type="text" placeholder="Enter your user name" className="" value={userid} onChange={(e)=>{
                    
                    setuserid(e.target.value);
                    
                }}>
                </input>

               <div>
               </div>
                <label>
                Password
                </label>
                <input type="password" placeholder="Enter your Password" className="">
                </input>
               </div>
               
               <Link to="/cart">
               <button className="btn btn-success my-2" onClick={adduserid} >Submit</button>
               </Link>
            </div>

        </div>
    )
}
export default LoginFrom;