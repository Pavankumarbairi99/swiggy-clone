import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react";
import Header from "./Components/Header";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { lazy,Suspense} from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartItems from "./Components/Cart";
import { useState } from "react";
import LoginFrom from "./Components/loginForm";
import {Body} from "./Components/Bodycard";

const root = ReactDOM.createRoot(document.getElementById('root1'));

const About= lazy(()=>import("./Components/About"))
const Contact = lazy(()=>import("./Components/Contact"))

const Appjs=()=>{
    let[logIn,setlogIn]=useState("")
 return( 
   <div>
    <Provider store={appStore}>
    <userContext.Provider value={{userName:logIn,setlogIn}}>     
     <Header />
     <Outlet />
     </userContext.Provider>
     </Provider>
   </div>
 )
}
let routerelements = createBrowserRouter([
    {
        path:"/",
        element:<Appjs />,
        children:[
            {
                path:"/",
                element:
                   <Body />,
            },
            {
                path:"/about",
                element:
               <Suspense fallback={<h1>Loading...!</h1>}>             
                   <About />
                   </Suspense>

            },
            {
                path:"/contact",
                
                element:
                <Suspense fallback={<h1 className='my-5 text-center text-lg'>Loading...!</h1>}>             
                   <Contact />
                   </Suspense>,
            },
            {
                path:"/cart",
                element:<CartItems />
            },
            {
                path:"/restaurantmenu/:resid",
                element:<RestaurantMenu />,
            },
            {
                path:"/loginForm",
                element:<LoginFrom />
            },
        ],
        errorElement:<Error />
    },
   
])
root.render(<RouterProvider router={routerelements} />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
