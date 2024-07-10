import { CDN_URL } from '../utils/constants';
import styleCard from './styleCard'

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
    } = resData?.data;

    const {
        deliveryTime
    } = resData?.data?.sla;
  
    return (
        <div
            className="restro-card"
            style={styleCard}
        >
      <div className="restro-img">
        <img
          className="restro-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes ⏱️</h4>
        </div>
    );
};

export default RestaurantCard;