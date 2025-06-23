export default function FoodCard({fooDdata}){
    return(
        <>
        <a href={fooDdata?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooDdata?.imageId}></img>
        </a></>

    )

}