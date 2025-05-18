import {  useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import logo from "../img/logo.png"


const Header = () => {
    let status= useOnlineStatus();
    let userName = useContext(userContext);
    const cartItems = useSelector((store)=>store.cart.items)
  return(
  <div className="nav-bar">


    <div>
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo-img"></img>
        </Link>
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
