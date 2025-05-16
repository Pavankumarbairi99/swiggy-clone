import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

let appStore= configureStore({
    reducer:{
        cart:cartReducer,
    }
})
export default appStore;