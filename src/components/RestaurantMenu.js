import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu =()=>{

    const {resId} = useParams();
 
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(null);

    const dummy = "dummy data";

    //the above only 2 lines need to worry about passing the data through passin resid
    //now we made a custom hook use restaurant menu
    //it holds all the code for fetching the data
    //now the lines blow only help us to dipslay the fetched data

    if(resInfo===null) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
      } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} -{costForTwoMessage}</p>
            {/*HERE WE WILL BUILD ACCORDION SHAPED MANU WITH CATEGORIES*/ }
            {/*WE WILL BUILD ACCORDION ITEM FOR EACH CATEGORY*/ }

            {categories.map((category, index)=>(<RestaurantCategory
            key={(category.card.card.title)}
            data={category.card.card}
            showItems={index=== showIndex ? true : false}
            setshowIndex= {() => (index)}
            dummy={dummy}
            />))}
        </div>
    )
};

export default RestaurantMenu;