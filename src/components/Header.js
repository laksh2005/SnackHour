import { useState, useEffect } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from 'react-router-dom';

const Header = () => {

    const [btnNameReact, setbtnNameReact ] = useState("Login");
    console.log("Header Render");

//if there is no dependency array like in [] below => useEffect is called on every render
//if the dependency array is empty = [] => useEffect is called just once, on initial render
//if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
    useEffect(()=>{
      console.log("useEffect rendered");
    }, [btnNameReact]);

    return(
      <div className='header'>
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="App Logo"
          className="logo"
        />
      </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login"
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