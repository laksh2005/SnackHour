import { CDN_URL } from '../utils/constants';


const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
    } = resData?.info;

    const {
        deliveryTime
    } = resData?.info?.sla;
  
    return (
      <div
      className="m-4 p-4 w-[250px] rounded-lg hover:bg-blue-300 bg-blue-100">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />

        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <br></br>
        <em>{cuisines.join(', ')}</em>
        <h4>{avgRating} stars ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes ⏲️</h4>

    </div>
    );
};

export default RestaurantCard;