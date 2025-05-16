import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";



const Header = () => {
    let status= useOnlineStatus();
    let userName = useContext(userContext);
    const cartItems = useSelector((store)=>store.cart.items)
  return(
  <div className="nav-bar">


    <div>
 <img src="https://res.cloudinary.com/dvubvku3b/image/upload/v1744138447/image_3_t9uvu4.png" alt="logo" className="nav-logo-img"></img>
     
    </div>
   <div className="nav-menu ">
    <ul>
        <li>
          <Link to="/" className="nav-link-list">Home</Link>  
        </li>
        <li>
           <Link to="/about" className="nav-link-list">  About Us</Link>
        </li>
        <li>
            Menu items
        </li>
        <li>
            <Link to="/contact" className="nav-link-list">Contact Us</Link>
        </li>
        <li className="mx-1">
        <Link to="/cart" className="nav-link-list"><i className="fa-solid fa-cart-shopping font-bold text-lg"></i> ({cartItems.length} items)
        </Link>
        </li>
        <li>Online Status: {status===true? <i className="fa-solid fa-circle-check online" ></i>:"Offline"} </li>
        <Link to="/loginForm" className="nav-link-list">
        <button className="btn bg-danger ms-5 text-white" >Login</button>
        </Link>
       <li>{userName.userName}</li>
       
    </ul>

   </div>
  </div>
)};
export default Header;
