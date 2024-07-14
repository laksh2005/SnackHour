import { useState, useEffect } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

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

    return(
      <div className="flex justify-between bg-red-300 shadow-xl m-2 ">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            className="w-56"
        />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4"> Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="px-4"
                    onClick={()=>{
                    btnNameReact === "Login" 
                    ? setbtnNameReact("Logout")
                    : setbtnNameReact("Login")
                    }}>
                  {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };    

  export default Header;