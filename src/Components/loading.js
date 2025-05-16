let Loading=()=>{
    return(
       <div className="container">
            <h1 className="heading-text">Ours Menu Items</h1>
            <div className="search-div">
                <input type="text" id="searchinput-home-id" ></input>
                <button className="search-btn">Search</button>
            </div>
            <button className="btn-items ">
                    Top Rated Restaurants</button>

            <button className="btn-items" >
                    Low Price</button>
                    <button className="btn-items">
                   Veg Items 
                </button>
                <button className="btn-items">
                Beverages 
                </button>
         <div className="row mt-5 d-flex justify-content-evenly">
            <div className="col-10 col-md-3 laoding-card"></div>
            <div className="col-10 col-md-3 laoding-card"></div>
            <div className="col-10 col-md-3 laoding-card"></div>
            <div className="col-10 col-md-3 laoding-card"></div>
            <div className="col-10 col-md-3 laoding-card"></div>
            <div className="col-10 col-md-3 laoding-card"></div>
            <div className="col-10 col-md-3 laoding-card"></div>
            <div className="col-10 col-md-3 laoding-card"></div>
            <div className="col-10 col-md-3 laoding-card"></div>
            


          </div>
       </div>
    )
}
export default Loading;