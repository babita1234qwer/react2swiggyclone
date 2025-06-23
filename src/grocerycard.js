export default function GroceryCard({fooDdata}){
    return(
        <><div className="flex-none">
                <a href={fooDdata?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooDdata?.imageId}></img>
        </a>
        <h2>{fooDdata?.action?.text}</h2>
        </div>
        </>
    )
}