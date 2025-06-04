import React, {useState} from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {IPropsTrendingNowCard} from "./Interfaces/Interfaces";
import HomepageTab from "./Components/SiteTabs/HomepageTab/HomepageTab";
import CategoriesTabA from "./Components/SiteTabs/CategoriesTab/CategoriesTabA";
import Wishlist from "./Components/SiteTabs/WishlistTab/Wishlist";
import CartTab from "./Components/CartTab/CartTab";
import ErrorTab from "./Components/SiteTabs/ErrorTab/ErrorTab";

function App() {

    const [searchCategory, setSearchCategory] = useState("");
    const [wishlist, setWishlist] = useState<IPropsTrendingNowCard[]>([]);
    const [cart, setCart] = useState<IPropsTrendingNowCard[]>([]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomepageTab setSearchCategory={setSearchCategory} />,
            errorElement: <ErrorTab />
        },
        {
            path: "/categories",
            element: <CategoriesTabA searchCategory={searchCategory} setSearchCategory={setSearchCategory}/>
        },
        {
            path: "/cart",
            element: <CartTab />
        },
        {
            path: "/wishlist",
            element: <Wishlist />,
        }
    ]);

  return (
    <div className="app">
        <div className="mainPage">
            <RouterProvider router={router} />
        </div>
        {/*<CategoriesTabA searchCategory={searchCategory} setSearchCategory={setSearchCategory}/>*/}
    </div>
  );
}

export default App;


// <div className="mainPage">
//     <SidebarTab/>
//     <div className="mainWindow">
//         <HomepageWindow setSearchCategory={setSearchCategory}/>
//         <TrendingNowWindowS/>
//     </div>
// </div>