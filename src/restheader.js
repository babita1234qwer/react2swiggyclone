import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function RestHeader(){
    const counter= useSelector((state)=>state.cartslice.items);
    return (
<div className="container mx-auto py-4 px-8 bg-gradient-to-r from-orange-100 to-orange-200 shadow flex justify-between items-center rounded-b-2xl mb-8">
            <div>
                <p className="text-3xl md:text-5xl font-extrabold text-orange-600 tracking-wide">Swiggy</p>
            </div>
            <div>
                <Link to="/checkout" className="flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
                    </svg>
                    <span className="text-xl font-semibold">Cart&nbsp;({counter.length})</span>
                </Link>
            </div>
        </div>
    )

}