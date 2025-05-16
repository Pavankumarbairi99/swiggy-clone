let api = async() => {

    let fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.3894067&lng=78.4990231&str=Veg%20Thali&trackingId=undefined&submitAction=ENTER&queryUniqueId=1a5dff72-a75d-ce92-53b1-b59423c168aa&selectedPLTab=RESTAURANT")
    let data2 = await fetchdata.json()
    return data2
}
let Biryani = api();

export default Biryani;