import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState('');
  

  console.log("Body Rendered");

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    console.log(json);


    // * optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

    //conditional rendering
//  if(listOfRestaurants.length === 0){ //we will use shimmer ai here 
//    return <Shimmer />
//  }

//we can write this if condition by integrating it below too

  return listOfRestaurants === null ? <Shimmer /> : (    //means if length=0 return shimmer, or else return the below code
    <div className="body">
      <div className="filter">  
{/*SEARCH button*/}
        <div className="search">
           <input type="text" 
            className='search-box'
            placeholder="Search Food or Restaurant"  
            value={searchText} 
            onChange={(e)=>{
              setsearchText(e.target.value);
            }}
            />
           <button onClick={()=>{
            console.log(searchText)
            const filteredRestaurants = listOfRestaurants.filter(
              (res)=> res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
            );
            //the .includes at the last means that whatever we search, example "cafe", is included in the name of the restaurant from location.
            
            setfilteredRestaurants(filteredRestaurants);
           
           }}>Search</button>
        </div> 
{/*FILTER BUTTON*/}
        <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.info.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
        {filteredRestaurants.map((restaurant) => (
          <Link
          key={restaurant.info.id}
          to={'/restaurants/' + restaurant.info.id}
        >
          <RestaurantCard resData={restaurant.info.id} />
        </Link>
      ))}
      </div>
    </div>  
  );
};

export default Body;