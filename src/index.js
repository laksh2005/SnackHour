import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

//lazy loading / on demand loading
//below this is a dynamic import
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setuserName] = useState();

  //authentication logic
  useEffect(()=>{
    //we will here make an api call and send username and password
    const data={
      name:"👤 Normie User"
    };
    setuserName(data.name);
  }, [])

  return (
    <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser : userName, setuserName}}>
      <div className="app">
          <Header />  
          <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>

  )
    

}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
     ],
     errorElement: <Error />,
   },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />); 
