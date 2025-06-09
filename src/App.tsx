import React, {useState} from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {IMockData} from "./Interfaces/Interfaces";
import HomepageTab from "./Components/SiteTabs/HomepageTab/HomepageTab";
import CategoriesTab from "./Components/SiteTabs/CategoriesTab/CategoriesTab";
import Wishlist from "./Components/SiteTabs/WishlistTab/Wishlist";
import CartTab from "./Components/SiteTabs/CartTab/CartTab";
import ErrorTab from "./Components/SiteTabs/ErrorTab/ErrorTab";
import SidebarTab from "./Components/SiteTabs/SidebarTab/SidebarTab";

function App() {

    const [searchCategory, setSearchCategory] = useState("");
    const [cart, setCart] = useState<IMockData[]>([]);
    const [wishlist, setWishlist] = useState<IMockData[]>([]);


    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomepageTab setSearchCategory={setSearchCategory} setWishlist={setWishlist} setCart={setCart}/>,
            errorElement: <ErrorTab />
        },
        {
            path: "/categories",
            element: <CategoriesTab searchCategory={searchCategory} setSearchCategory={setSearchCategory}/>
        },
        {
            path: "/cart",
            element: <CartTab cart={cart} setCart={setCart}/>
        },
        {
            path: "/wishlist",
            element: <Wishlist wishlist={wishlist} setWishlist={setWishlist}/>,
        }
    ]);

  return (
    <div className="app">
        <div className="mainPage">
            <RouterProvider router={router} />
        </div>
    </div>
  );
}

export default App;


// add id // children props react ts "layout"