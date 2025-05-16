import { useState } from "react";
import RestMenuListCard from "./RestMenuListCard";
const RestMenuList=({data, cardItems, setshowIndex})=>{
    let {title}=data;
    let menuItems=data.itemCards;

    let handlingClick=()=>{
            setshowIndex() 
    }
   
    return(
        <div>
            <div className="w-8/12 mx-auto my-4 bg-gray-100 shadow-lg p-4" >
           <div className="flex justify-between cursor-pointer" onClick={handlingClick}>
           <h5 className="font-bold text-sm">{title} ({menuItems.length})</h5>
           <span><i className="fa-solid fa-arrow-down"></i></span>
           </div>
           {cardItems && menuItems.map((items)=>(
           <RestMenuListCard  key={items.card.info.id} data={ items.card.info} />
           ))}
            
            </div>
         
        </div>
    )
}
export default RestMenuList;