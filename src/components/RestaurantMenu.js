import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu =()=>{

    const {resId} = useParams();
 
    const resInfo = useRestaurantMenu(resId);

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

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} -{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - { "Rs."} {item.card.info.price /100}
                    </li>))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;