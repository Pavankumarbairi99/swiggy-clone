import { useState } from "react";
import RestCard from "./Restcard";
import {useEffect } from "react";
import Loading from "./loading";
import { BriyaniURL } from "../utils/Constants";
import { VegsURL } from "../utils/Constants";
import { BeveragesURL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

export const Body = () => {
    let [orgRestaurantlist, setorgRestaurantlist]=useState([]);
   let [Restaurantlist, setRestaurantlist]=useState([]);
   let [searchconsole, setsearchconsole]=useState("")
   let statuscode=useOnlineStatus();
useEffect(()=>{
    apicalls();
  
},[])


let apicalls=async()=>{
    let datafetch = await fetch(BriyaniURL)
    let data1 = await datafetch.json()
    setorgRestaurantlist(data1.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);
    setRestaurantlist(data1.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);
}
let vegsapi=async()=>{
    let datafetch = await fetch(VegsURL)
    let data2 = await datafetch.json()
    setorgRestaurantlist(data2.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);  
    setRestaurantlist(data2.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);  
}
let beveragesApi=async()=>{
    let datafetch = await fetch(BeveragesURL)
    let data3 = await datafetch.json()
    setorgRestaurantlist(data3.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);  
    setRestaurantlist(data3.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);  
}
if(statuscode===false){
    return <div>
        
        <h1>Check your internet Connection</h1>
    </div>
   
}
else{

    return Restaurantlist.length===0? <Loading /> :(
        <div className="container">
            <h1 className="heading-text">Ours Menu Items</h1>
            <div className="search-div">
                <input type="text" className="input-11 px-2" id="searchinput-home-id" value={searchconsole} onChange={(e)=>{
                    
                    setsearchconsole(e.target.value);
                    
                }}></input>
                <button className="search-btn" onClick={()=>{
                    if(searchconsole===""){
                        alert("Please Enter Vaild Details");
                        setRestaurantlist(orgRestaurantlist);
                    }else{
                     let elementsearch= searchconsole[0].toUpperCase()+searchconsole.slice(1,).toLowerCase();
                     
                     let searchlist = orgRestaurantlist.filter((item) => 
                        item.card.card.info.cuisines.includes(elementsearch)|  item.card.card.info.name.toLowerCase().includes(searchconsole.toLowerCase())
                    );
                    if(searchlist.length>1){
                        setRestaurantlist(searchlist)
                        {let input = document.getElementById("searchinput-home-id")
                            input.setAttribute("class","input-1");
                            }
                    }else{
                        let input = document.getElementById("searchinput-home-id")
                            input.setAttribute("class","input-error");
                            
                    }
                }
                }}>Search</button>
            </div>
            <div className="d-flex flex-row">
            <button className="btn-items bg-gray-100" onClick={()=>
                  {
                  let toprated = orgRestaurantlist.filter((item) => 
                      item.card.card.info.avgRating>4
                  );
                  setRestaurantlist(toprated)
                }}>Top Rated Restaurant's</button>

                <button className="btn-items" onClick={()=>
                  {
                  let lowprice = orgRestaurantlist.filter((item) => 
                      item.card.card.info.costForTwo/100<201
                  );
                  
                  setRestaurantlist(lowprice)
                }
            }>
                    Low Price</button>
                <button className="btn-items" onClick={()=>{
                   vegsapi()
                }}>
                   Veg Items 
                </button>
                <button className="btn-items" onClick={()=>{
                   beveragesApi()
                }}>
                   Beverages 
                </button>
            
            </div>
            <div className="row pt-2">
                {Restaurantlist.map((item) => (
                    <Link to={"/restaurantmenu/"+item.card.card.info.id } key={item.card.card.info.id} className="body-card-link col-12 col-md-5 col-lg-4"> <RestCard  info={item.card.card.info} /></Link>
                ))}
              
            </div>
        </div>
    );
}
};