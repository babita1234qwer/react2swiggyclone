import { useState } from "react";
import { dineoutRestaurants } from "./dinedata";
import Dinecard from "./dinecard";
import { useSearch } from "./searchglobal";
import { useLocationGlobal } from "./locationglobal"; 

export default function Dineoption(){
    const { search } = useSearch();
    const {location}=useLocationGlobal();
     let filteredRestaurants = dineoutRestaurants.filter(r =>
        r.info.name.toLowerCase().includes(search.toLowerCase())
    );
    if (location && location.trim() !== "") {
        filteredRestaurants = filteredRestaurants.filter(r =>
            r.info.locationInfo?.formattedAddress?.toLowerCase().includes(location.toLowerCase()) ||
            r.info.locationInfo?.city?.name?.toLowerCase().includes(location.toLowerCase()) ||
            r.info.locality?.toLowerCase().includes(location.toLowerCase())
        );
    }

    return(
        <div className="w-[80%] mx-auto  mt-20 mb-20">
            <p className="text-3xl font-bold">Discover best restaurants and Dineout</p>
           <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
           {filteredRestaurants.map((restaurantdata) =>
                    <Dinecard key={restaurantdata?.info?.id} restaurantdata={restaurantdata} />
                )}
            </div>  
        
        </div>

    )
}