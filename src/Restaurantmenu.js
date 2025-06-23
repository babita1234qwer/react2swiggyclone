import { useParams} from "react-router";
import { useEffect, useState } from "react";
import Menucard from "./menucard";
import { Link } from "react-router";
import RestinfoShimmerList from "./restinfoShimmer";



export default function RestaurantMenu(){
    const {id} = useParams();
    const [selected,setselected]=useState("veg");
    console.log(id);
    const [RestData, setRestData] = useState([]);
    
 useEffect(()=>{
    
     async function fetchData() {
        
      try{  const proxyServer = "https://cors-anywhere.herokuapp.com/"
                   const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

        
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        const tempdata=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterdata=tempdata?.filter((items)=>'title' in items?.card?.card)
        setRestData(filterdata);
      }catch(e){
        setRestData([]);
            console.error("Failed to fetch menu:", e);
      }
     }

     fetchData();
    },[id])
    console.log(RestData);
    if(RestData.length==0){
        return (<>
        <RestinfoShimmerList></RestinfoShimmerList>
        </>)
    }



return(

    <div>
        <div className="w-[80%] mx-auto mt-20">
            <Link to={`/city/delhi/${id}/search`}>
            <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Searchh for Dishes</p>
        </Link></div>
    <div className="w-[80%] mt-20 mb-20">
            <button  className={`text-2xl py-2 px-4 mr-2 border rounded-2xl ${selected==="veg"?"bg-green-600":"bg-gray-300"}`} onClick={()=>setselected(selected==="veg"?null:"veg")}>Veg</button>
            <button className={`text-2xl py-2 px-4 border rounded-2xl  ${selected==="non-veg"?"bg-red-600":"bg-gray-300"}`} onClick={()=>setselected(selected==="non-veg"?null:"non-veg")}>Non Veg</button>
      </div>
    <div className="w-[80%] mx-auto mt-20">
        {
            RestData?.map((menuitems)=><Menucard key={menuitems?.card?.card?.title} menuitems={menuitems?.card?.card}   foodselected={selected}></Menucard>)

        }
    </div>
    </div>
)
}