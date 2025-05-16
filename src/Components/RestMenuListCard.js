import { ImgCloudnary } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const RestMenuListCard=({data})=>{
let {name,price,imageId,description,ratings,id,defaultPrice}= data;
let {rating,ratingCountV2}=ratings.aggregatedRating;
const dispacth=useDispatch()
let addhandling=(data)=>{
    dispacth(addItem(data))
   
}
    return(
        <div className="row border-gray-200 border-b-1 m-2 p-2 ">
            <div className="col-12 col-md-6 flex flex-col justify-center order-md-1 order-2 w-8/12">
            <div >
            <span className="py-3 font-bold">{name}</span> -
            <span className="py-3 font-bold"> ₹{price/100 | defaultPrice/100}</span>
            <br></br>
            <span className="text-green-600 my-4">{rating}({ratingCountV2}) Reviews</span>
            </div>
            <p className="py-3 text-sm">{description}</p>
            </div>
            <div className=" p-4 flex justify-center col-12 col-md-6  my-2 order-1 order-md-2 ">
             
                 <div className="w-7/12">
                 <div className="absolute">
                        <button className="p-2 bg-black shadow-lg mx-5 text-white rounded-b-full my-10"
                        onClick={()=>addhandling(data)}>Add +</button>
                    </div>
                    <img src={ImgCloudnary+imageId} alt="Items Images"></img>

                 </div>
             
            </div>
        </div>
    )
}
export default RestMenuListCard;