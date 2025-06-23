import {imageGridCards } from "./utils/Fooditems";
import FoodCard from "./foodcard";

export default function Foodoptions(){
    return(
        <>
        <div className="w-[80%] container mx-auto  flex flex-wrap mt-20 gap-3">
            {
                imageGridCards.map((fooDdata)=><FoodCard key={fooDdata.id} fooDdata={fooDdata}></FoodCard>)
            }
        </div>
        </>
    )
}