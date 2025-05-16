import { ImgCloudnary } from "../utils/Constants";



const CartMenuList=({data})=>{
let {name,price,imageId,description,ratings,id,defaultPrice}= data;
let {rating,ratingCountV2}=ratings.aggregatedRating;

    return(
        <div> 
           <div className="row bg-gray-50 mx-3 border-b-1 border-gray-200  ">
           <div className="p-1 flex justify-center col-12 col-md-3  my-2  ">
             
             <div className="w-9/12">
             
                <img src={ImgCloudnary+imageId} alt="Items Images"></img>

             </div>
         
        </div>
        
           <div className="col-12 col-md-9 ">
            <div className="flex flex-row  justify-content-between" >
            <span className=" my-3 py-3 text-sm">{name}</span> 
            <span className="my-3 py-3 font-bold text-sm"> ₹{price/100 | defaultPrice/100}</span>

           
            </div>
            </div>
           
           
        </div>
        </div>
    )
}
export default CartMenuList;