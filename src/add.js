import React ,{useState} from "react";
import ReactDOM  from "react-dom/client";
import Home from "./home";
import RestaurantMenu from "./Restaurantmenu";
import SearchFood from "./searchfood";  
import SecondaryHome from "./secondaryhome";

import {BrowserRouter,Routes,Route} from "react-router";
import Restaurant from "./restaurant";
import { store } from "./stored/store";
import{Provider} from "react-redux";
import Checkout from "./checkout";
import { SearchProvider ,useSearch} from "./searchglobal";
import { LocationProvider,useLocationGlobal} from "./locationglobal";

function App(){

    return(
        <>
 

        <Provider store={store}>
             <SearchProvider>
                <LocationProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
             <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
             <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        </BrowserRouter>
        </LocationProvider>
         </SearchProvider>
        </Provider>
        
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);