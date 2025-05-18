import { useState,useContext } from "react";
import userContext from "../utils/userContext";
import { useNavigate } from "react-router-dom";
const LoginFrom=()=>{
    let navigate=useNavigate()
    let [userid,setuserid]=useState("")
    let [userpassword,setuserpassword]=useState("")
    let [username ,setusername]=useState("");
    let [errormsg,seterrormsg]=useState("");
    let[success,setsuccess]=useState("");
    const {setlogIn}=useContext(userContext);
    let adduserid=()=>{
        let emailid= /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(userid);
        let password=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(userpassword)
        if(emailid){
          if(password){
            setsuccess("Login Sucessfull")
            setlogIn(username)
            navigate("/")
          }else{
            seterrormsg("Incorrect Password")

          }
        }else{
            seterrormsg("Incorrect Email id ")
        }
        
    }
  
    return(
        <div className="login-container flex align-items-center">
            <div className="">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" className="login-img-left"></img>
            </div>
            <div className="login-form">
            <h2 className="my-2">Login Details</h2>

                <div>
                    <label>
                    User Name
                </label>
                <input type="text" placeholder="Enter your user name" className="" value={username} onChange={(e)=>{
                    
                    setusername(e.target.value);
                    
                }}>
                </input>
                <label>
                    Email ID
                </label>
                <input type="email" placeholder="Enter your user name" className="" value={userid} onChange={(e)=>{
                    
                    setuserid(e.target.value);
                    
                }}>
                </input>
                   
               <div>
               </div>
                <label>
                              Password
                </label>
                <input type="password" placeholder="Enter your Password" value={userpassword} onChange={(e)=>{
                    setuserpassword(e.target.value)
                }} className="">
                </input>
               </div>
               
                
               <button className="btn btn-success my-2" onClick={adduserid} >Submit</button>
                <p className="my-2 text-center text-lg text-red-700">{errormsg}</p>
                <p className="my-2 text-center text-lg text-green-700">{success}</p>

            </div>
            <div className="">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" className="login-img-right"></img>
            </div>
        </div>
    )
}
export default LoginFrom;