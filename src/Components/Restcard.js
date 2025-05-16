const RestCard = ({ info }) => {
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo}=info;
    return (
        <div className="Card-rest-bg d-flex flex-column justify-content-center align-items-center">
            <div className="rest-card-img w-7/12">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+cloudinaryImageId } alt="food-img"  className="cardimgs"/>
            </div>
            <div className="rest-card-text d-flex align-items-end ">
                
               <div>
               <h1 className="card-head ">{name}</h1>
                
                <p className="card-para">{cuisines.join(", ")}</p>
                <div className="d-flex">
                    <p className="card-para1">₹ {costForTwo/100} Price /  </p>
                    <p className="">
                         <i className="fa-solid fa-star text-green-700 mx-1"></i> <span className="text-green-700"> {avgRating} Rating</span>
                    </p>
                </div>
               </div>
               
            </div>
        </div>
    );
};
export default RestCard;