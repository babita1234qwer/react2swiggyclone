import { Link ,useNavigate} from "react-router";
import { useState } from "react";
import { useSearch } from "./searchglobal";
import { useLocationGlobal } from "./locationglobal";
export default function Header(){
     const { search, setSearch } = useSearch();
     const { location, setLocation } = useLocationGlobal();
    return(
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
           <div className=" text-white text-base font-bold flex gap-15 items-center">
            
            <a  target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
            <a target="_blank"  href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
            <a  className="border border-white py-3 px-4" target="_blank"  href="">Get the App</a>
            <a  className="border border-black bg-black py-3 px-4 rounded-2xl" target="_blank" href="">Sign in</a>
            
            
            </div> 
            </div>
            
            <div className="pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60  absolute top-0 right-0"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" ></img>
                <div className= "max-w-[60%] text-5xl text-white  font-bold container mx-auto text-center"> Order Food And groceries,Discover best restaurants.Swiggy it !</div>
               <div className="max-w-[70%] container mx-auto flex gap-5 mt-10" >
                <input
  className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl"
  placeholder="enter your delivery location"
  value={location}
  onChange={e => setLocation(e.target.value)}
/><input
            className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Search for restaurant and items for more"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
            
            </div>
            </div>
        
        <div className="max-w-[80%] container mx-auto flex" >
            <Link to="/restaurant">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
             </Link>
             <a href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
             </a>
             <a  href="https://www.swiggy.com/genie">
             
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/30/1ba3942e-67ff-4100-8f2e-7bcd92a0cc94_Genie3BU.png"></img>
             </a>
            </div>
            
        </header>
    )
}