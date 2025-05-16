const MenuRestCard = ({ menuListItems }) => {
    const {name,imageId,ratings,defaultPrice,price}=menuListItems;
    const ratinglist = ratings.aggregatedRating;
    
    return (
        <div className="col-12 col-md-5 Card-rest-bg">
            
            <div className="rest-card-text">
                <h1 className="card-head">{name}</h1>
                <hr />
                <div className="d-flex flex-column">
                    <p className="card-para1">₹ {(defaultPrice| price)/100} Price </p>
                    <p className="card-para-rating">
                        <i className="fa-solid fa-star star-rating" ></i> {ratinglist.rating} Rating <span className="menucard-rating-count"> ({ratinglist.ratingCountV2})</span>
                    </p>
                </div>
            </div>
            <div className="rest-card-img d-flex justify-content-center">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId } alt="food-img"  className="menu-cardimgs"/>
            </div>
        </div>
    );
};
export default MenuRestCard;