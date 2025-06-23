import { useState } from "react";
import Restinfo from "./restinfo"
export default function Menucard({menuitems,foodselected , food = ""}){
   const [isopen,setisopen]=useState(true);
   const filterBySearch = (items) =>
        items?.filter(
            (item) =>
                item?.card?.info?.name
                    ?.toLowerCase()
                    .includes(food.toLowerCase())
        );
     let filtered = menuitems?.itemCards;
    if (foodselected === "veg") {
        filtered = filtered?.filter((food) => "isVeg" in food?.card?.info);
    } else if (foodselected === "non-veg") {
        filtered = filtered?.filter((food) => !("isVeg" in food?.card?.info));
    }
    filtered = filterBySearch(filtered);
   
   
   
   
    if("categories" in menuitems){
    return(
        <div className="w-full mt-4" >
            <p className="text-2xl font-bold">{menuitems.title}</p>
            <div>
                {
                    menuitems?.categories?.map((items)=>{<Menucard key={items?.card?.info?.id} menuitems={items?.card?.info} foodselected={foodselected}  food={food}></Menucard>})
                }
            </div>

        </div>

    )

   }
    if (!filtered || filtered.length === 0) return null;
   if(!isopen){
    return(
        
    <div className="w-full">
        <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4 w-full">{menuitems?.title}</p>
        <button  className="text-5xl font-bold mr-20" onClick={()=>setisopen(!isopen)} >{isopen?'^':'v'}</button>
        </div>   
        <div className="h-5 bg-gray-600 mt-2 mb-2"></div>
    </div>)
   }
   if(foodselected==="non-veg"){

         return(
               <>
            <div className="w-full">
                <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4 w-full">{menuitems?.title}</p>
            <button  className="text-5xl font-bold mr-20" onClick={()=>setisopen(!isopen)} >{isopen?'^':'v'}</button>
            </div>   
            
                <div>
                    {filtered.map((items) => (
                    <Restinfo key={items?.card?.info?.id} restdata={items?.card?.info}></Restinfo>
                ))}
        
    
                </div>
                <div className="h-5 bg-gray-600 mt-2 mb-2"></div>
            </div>
            
    
            
        </>
    )

   }

   if(foodselected==="veg"){
    return(
        <>
        <div className="w-full">
            <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4 w-full">{menuitems?.title}</p>
        <button  className="text-5xl font-bold mr-20" onClick={()=>setisopen(!isopen)} >{isopen?'^':'v'}</button>
        </div>   
            
            <div>
                {
                    menuitems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><Restinfo key={items?.card?.info?.id} restdata={items?.card?.info} ></Restinfo>)
                }

            </div>
            <div className="h-5 bg-gray-600 mt-2 mb-2"></div>
        </div>
        

        </>
    )}
   
   
   
    return(
        <div className="w-full">
            <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4 w-full">{menuitems?.title}</p>
        <button  className="text-5xl font-bold mr-20" onClick={()=>setisopen(!isopen)} >{isopen?'^':'v'}</button>
        </div>   
            
            <div>
                {filtered?.map((items) => (
                    <Restinfo key={items?.card?.info?.id} restdata={items?.card?.info}></Restinfo>
                ))}
            </div>
            <div className="h-5 bg-gray-600 mt-2 mb-2"></div>
        </div>
        

    )
}