import { useState, useEffect, useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setbtnNameReact ] = useState("Login");
    console.log("Header Render");

//if there is no dependency array like in [] below => useEffect is called on every render
//if the dependency array is empty = [] => useEffect is called just once, on initial render
//if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
    useEffect(()=>{
      console.log("useEffect rendered");
    }, [btnNameReact]);

    const onlineStatus = useOnlineStatus();

    const{loggedInUser} = useContext(UserContext);

    //this selector tells us which portion of store we need to subscribe to
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
      <div className="flex justify-between bg-customColor shadow-xl m-2 ">
        <div className="logo-container">
          <img
            src= {LOGO_URL}
            className="w-44"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4"> Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
            <li className="px-4 hover:bg-white rounded-lg"><Link to="/">Home</Link></li>
            <li className="px-4 4 hover:bg-white rounded-lg"><Link to="/about">About Us</Link></li>
            <li className="px-4 4 hover:bg-white rounded-lg"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4 4 hover:bg-white rounded-lg"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 text-bold text-xl 4 hover:bg-white rounded-lg"><Link to="/cart">Cart 🛒 ({cartItems.length}) Items</Link></li>
            <button className="px-4"
                    onClick={()=>{
                    btnNameReact === "Login" 
                    ? setbtnNameReact("Logout")
                    : setbtnNameReact("Login")
                    }}>
                  {btnNameReact}
            </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };    

  export default Header;