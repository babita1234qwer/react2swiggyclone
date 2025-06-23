import {useParams} from "react-router";
import {useState ,useEffect} from "react"; 
import Menucard from "./menucard";



export default function SearchFood(){
    const {id}=useParams();
    const [food,setFood]=useState("");
    const [RestData, setRestData] = useState([])
    useEffect(()=>{
        
         async function fetchData() {
            
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
                        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
               const response = await fetch(proxyServer+swiggyAPI);

         
           
            const data = await response.json();
            console.log(data);
            const tempdata=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterdata=tempdata?.filter((items)=>'title' in items?.card?.card)
            console.log(filterdata); 
            setRestData(filterdata);
    
         }
        
         fetchData();
        },[])
     return(
        <>
   < input
  className="block mx-auto my-8 w-full max-w-xl pl-12 pr-4 py-4 text-2xl bg-white border-2 border-orange-400 focus:border-orange-600 rounded-2xl shadow focus:outline-none transition-all duration-200"
  style={{
    backgroundImage: "url('https://www.svgrepo.com/show/488200/search.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "16px center",
    backgroundSize: "28px 28px"
  }}
  placeholder="Search for dishes..."
  value={food}
  onChange={e => setFood(e.target.value)}
/>
    {RestData.map(menuitems => (
      <Menucard
        key={menuitems?.card?.card?.title}
    menuitems={menuitems?.card?.card}
    food={food}
      />
    ))}
  </>
    )

}