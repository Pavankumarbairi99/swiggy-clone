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
        <div className="login-container flex align-items-center">
            <div className="">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" className="login-img-left"></img>
            </div>
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
               
               <Link to="/">
               <button className="btn btn-success my-2" onClick={adduserid} >Submit</button>
               </Link>
            </div>
            <div className="">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" className="login-img-right"></img>
            </div>
        </div>
    )
}
export default LoginFrom;