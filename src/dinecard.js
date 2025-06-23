export default function Dinecard({restaurantdata}){
    return(
        <div className="max-w-sm flex-none">
            <a target="_blank"  href={restaurantdata.cta.link}>
            <div className="relative">
                <img  className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" +
              restaurantdata?.info?.mediaFiles[0]?.url}></img>
            <p className="absolute bottom-4 left-4 text-2xl text-white">{restaurantdata.info.name}</p>
            <p className="absolute bottom-4 right-4 text-2xl text-white">{restaurantdata?.info?.rating?.value}</p>
            <div className="absolute bg-gradient-to-t from-black h-10 bottom-0 left-0 right-0"></div>
            </div>
            </a>
        </div>
    )


}