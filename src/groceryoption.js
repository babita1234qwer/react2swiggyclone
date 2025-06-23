import { GrocerGridCard } from "./grocery"
import GroceryCard from "./grocerycard"




export default function Groceryoption(){
    return(
        <><div className="w-[80%] container mx-auto mt-20">
            <h1 className="text-2xl font-bold"> Shop Groceries on Instamart</h1>

        
                <div className="w-[80%] container mx-auto  flex flex-nowrap overflow-x-auto  mt-5 gap-3">
                    {
                        GrocerGridCard.map((fooDdata)=><GroceryCard key={fooDdata.id} fooDdata={fooDdata}></GroceryCard>)
                    }
                </div>
                </div>
                </>
    )
}