import { useState, useEffect } from "react";
import Loading from "./loading";
import { menuListCardURL } from "../utils/Constants";
import { useParams } from "react-router-dom";
import RestMenuList from "./RestMenuList"
import useOnlineStatus from "./useOnlineStatus";
import LoadingMenu from "./loadingMenu";
import internetimg from "../img/internet.jpg"

let RestaurantMenu=()=>{
    let [orgMenulist,setorgMenulist]=useState([]);
    let [singmenulist,setsingmenulist]=useState([]);
    let [searchconsole, setsearchconsole]=useState("")
    const [restname,setrestname]=useState("");
    let [showIndex,setshowIndex]=useState(0);
    let {resid}= useParams()
    let statuscode=useOnlineStatus();
useEffect(()=>{
restmenulistapi();
},[])
let restmenulistapi=async()=>{
    let datafetch = await fetch(menuListCardURL+resid)
    let data1 = await datafetch.json()
    setrestname(data1.data.cards[2].card.card.info);
    let datamenu= data1.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    let singlemenu= datamenu.filter((items)=>items?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    setsingmenulist(singlemenu)

}
if(statuscode===false){
    return <div className="h-full">
        
        <div className="my-5 flex align-content-center justify-content-center">
            <img src={internetimg} alt="" className="w-120" />
        </div>
    </div>
   
}
else{
    if(singmenulist.length===0){
        return <LoadingMenu />
    }
        return (
            <div className="container">
                <h1 className="rest-menu-heading mt-5 mb-3 text-center">{restname.name}</h1>
    
                <div className="d-flex flex-row justify-content-center">
                     <h1 className="restaurant-heading-names text-center"><i className="fa-regular fa-star text-green-700 text-sm"></i> {restname.avgRating}{ " "} ({restname.totalRatingsString})</h1>
                     <h1 className="restaurant-heading-names mx-1 text-center"> {restname.costForTwoMessage}</h1>
                </div>
                <h1 className="cusinise-rest-menu text-center">{restname.cuisines.join(", ")}</h1>
                <p className="DeliveryTime-rest-menu text-center"><i className="fa-solid fa-stopwatch text-sm text-blue-500"></i> {restname.sla.minDeliveryTime}-{restname.sla.maxDeliveryTime} mins /  Location-  {restname.locality}</p>
    
    
              {/*  <div className="search-div">
                    <input type="text" className="input-1" id="searchinput-id" value={searchconsole} onChange={(e)=>{
                        
                        setsearchconsole(e.target.value);
                        
                    }}></input>
                    <button className="search-btn" onClick={()=>{
                        if(searchconsole===""){
                            alert("Please Enter Vaild Details");
                        }else{
                         let searchlist = orgMenulist.filter((item) => 
                           item.card?.info.name.toLowerCase().split(" ").includes(searchconsole.toLowerCase())
                        );
                        if(searchlist.length>1){
                            setmenulist(searchlist)
                            {let input = document.getElementById("searchinput-id")
                                input.setAttribute("class","input-1");
                                }
                        }else{
                            {let input = document.getElementById("searchinput-id")
                            input.setAttribute("class","input-error");
                            }
                        }
                    }
                    }}>Search</button>
                </div>
                <div className="d-flex flex-row">
                <button className="btn-items" onClick={()=>{
                    let topratinglist = orgMenulist.filter((item1)=> 
                        item1?.card?.info?.ratings.aggregatedRating.rating>4
                     )     
                    setmenulist(topratinglist);
                }}>Top Rated</button>
    
                    <button className="btn-items" onClick={()=>{
      
                      let lowprice = orgMenulist.filter((item) =>  
                        item?.card?.info?.price/100<200 | item?.card?.info?.defaultPrice/100<200
                      );
                      if(lowprice.length>1){
                      setmenulist(lowprice)
                      }
                    }
                }>
                        Low Price</button>
                        <button className="btn-items" onClick={()=>{
                            let veglist=orgMenulist.filter(item=>
                                item.card.info.itemAttribute.vegClassifier==="VEG"
                            )
                            if(veglist.length>1){
                                setmenulist(veglist);
                            }
                        }}>VEG'S</button>
                        <button className="btn-items" onClick={()=>{
                            let nonVeglist=orgMenulist.filter(item=>
                                item.card.info.itemAttribute.vegClassifier==="NONVEG"
                            )
                            if(nonVeglist.length>1){
                                setmenulist(nonVeglist);
                            }
                        }}>NON-VEG</button>
                </div> 
                {menulist.map((item)=>( 
                <MenuRestCard key={item?.card?.info?.id} menuListItems={item?.card?.info} />
              ) )}
                */}
            <div className="mt-5">
               {singmenulist.map((item,index) => (
                 <RestMenuList 
                 key={item.card.card.categoryId} 
                 data={item.card.card} 
                 cardItems={index===showIndex ?true:false}
                 setshowIndex={()=>setshowIndex(index)}
                 
                 />
                ))}
            </div>
        </div>
        )
}
}
export default RestaurantMenu;