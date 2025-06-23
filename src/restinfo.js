import {useState} from 'react';
import { addItems,IncrementItems,DecrementItems } from './stored/cartslicer';
import {useDispatch, useSelector} from 'react-redux';
export default function Restinfo({restdata}){
  
  const dispatch
  =useDispatch();
  const items =useSelector((state)=>state.cartslice.items); 
  const element=items.find(item=>item.id===restdata.id);
  const count=element?element.quantity:0;
  function handleadditems(){
   
   dispatch(addItems(restdata));

  }
  function handleincrementitems(){
      
      dispatch(IncrementItems(restdata));
  }
   function handledecrementitems(){
         
         dispatch(DecrementItems(restdata));
   }

    return(
        <>
        <div className="flex w-full justify-between mb-2 pb-2">
           <div className="w-[70%]">
            <p className="text-2xl text-gray-700 font-semibold mb-1">{restdata?.name}</p>   
            <p className="text-xl">{"₹"+ ("defaultPrice" in restdata ? restdata?.defaultPrice/100:restdata?.price/100)}</p>
                     <span className="text-green-700">{restdata?.ratings.aggregatedRating?.rating}</span>
             <span>{"("+restdata?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
           <p> {restdata.description}</p>
           </div>
           <div className="w-[20%] relative h-42">
            <img  className="w-60 h-36 object-cover  rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restdata.imageId}></img>
            { count===0?(<button className="absolute bottom-1 left-20 rounded-xl text-green-600 px-4 py-2 shadow-md border border-white bg-white" onClick={()=>handleadditems()}>ADD   </button>):(<div className=" absolute bootom-1 left-20 flex gap-2 text-2xl text-green-600  px-6 py-2 shadow-md border border-white bg-white rounded-2xl">
               <button onClick={()=>handledecrementitems()}>-</button>
            <span>{count}</span>
            <button onClick={()=>handleincrementitems()}>+</button>
            </div>)
            }
           </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
)
}
