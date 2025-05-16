import { useSelector } from "react-redux";
import CartMenuList from "./CartMenuList";
import userContext from "../utils/userContext";
import {useContext,  } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";

let CartItems = () => {
    let cartItem = useSelector((store)=>store.cart.items)
    let userName = useContext(userContext);
    let totalPrice=0;
    let dispacth=useDispatch();
    let clearItemsList=()=>{
        dispacth(clearItem())
       
    }
    let addtotalprice=(items)=>{
      totalPrice += items.price/100 | items.defaultPrice/100 
    }
    let subprice=()=>{
      let sum = totalPrice/100*5;
      let discount = parseFloat(sum.toFixed(2))
      totalPrice= totalPrice-discount;
      return discount;
    }
    let addGST=()=>{
      let sum = totalPrice/100*15;
      let gst = parseFloat(sum.toFixed(2))
      totalPrice= totalPrice+gst;
      return gst;
    }
    let toPay=()=>{
      let toPays =parseFloat(totalPrice.toFixed(2))
      return toPays
    }
    return (
      <div className="py-2 cart-bg ">
        <h1 className="font-bold text-2xl text-center  pt-2">Cart</h1>
        <div className="flex flex-row justify-content-end mx-10 my-3">
        <button className="btn btn-secondary mr-auto" onClick={()=>clearItemsList()}>Clear Cart</button>
        </div>
      <div className="row flex justify-evenly"> 
        <div className="col-12 col-md-6">
            <div className=" bg-gray-50  h-28 px-4 py-5 mx-2">
            <h5 className="font-bold text-sm"> <i className="fa-solid fa-circle-user text-blue-700 text-2xl mr-2"></i> User Name: {userName.userName.length>0&& userName.userName||<Link to="/loginForm"><button className="btn btn-secondary">Login</button></Link>}</h5>
            </div>
            <div className=" bg-gray-50 my-3 p-4 mx-2">
            <h5 className="font-bold text-sm"> <i className="fa-solid fa-location-dot text-blue-700 text-2xl mr-2"></i> Choose a delivery address
            </h5>
            <p className="pl-8">
              Choose Address on Location
            </p>
            <button className="btn btn-warning "> Add Address</button>
            </div>
            <div className=" bg-gray-50 my-3 p-4 mx-2">
            <h5 className="font-bold text-sm"> <i className="fa-solid fa-wallet text-blue-700 text-2xl mr-2"></i> Choose payment method
            </h5>
           
            <button className="btn btn-success my-3 w-100 p-2 "> Procced to Pay</button>
            </div>
        </div>
       { cartItem.length>0 && <div className="col-12 col-md-5 cart-items-list">
            { cartItem.map((items)=>(
                    <CartMenuList key={items.id} data={items} />
                )) }
        
        { cartItem.map((items)=>(
                     addtotalprice(items)
                )) }
        
        <h5 className="my-4 mx-3 text-sm">Bill Details
        </h5>
          <div className="flex flex-row justify-content-between px-3 payment-text">
          <p className=" mx-4">Item Total </p> <p>{totalPrice}</p>

          </div>
          <div className="flex flex-row justify-content-between px-3 payment-text">
          <p className=" mx-4">Extra discount for you </p> <p>-{subprice() }</p>
        

          </div>
          <div className="flex flex-row justify-content-between px-3 payment-text">
          <p className=" mx-4">GST & Other Charges </p> <p>{addGST()}</p>

          </div>
          <div className="bg-gray-300 h-1 my-2 mx-3">

          </div>
          <div className="flex flex-row justify-content-between px-3 payment-text " >
          <p className="font-bold mx-4">To Pay </p> <p>{toPay()}</p>
          </div>
        </div>|| <div className="col-12 col-md-5 cart-items-list my-4"><p className="font-bold text-lg  text-center"> Your cart is Empty, Add Items</p></div>}
      </div>
      </div>
    );
  };
  
export default CartItems;
  