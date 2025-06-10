import React from 'react';
import Sidebar from "../SidebarTab/SidebarTab";
import HomepageWindow from "./HomepageWindow/HomepageWindow";
import "./HomepageTab.css";
import {IPropsHomepageTab} from "../../../Interfaces/Interfaces";
import TrendingNowWindow from "../../TrendingNowWindow/TrendingNowWindow";

const HomepageTab = ({setSearchCategory,setWishlist,setCart}:IPropsHomepageTab) => {
    return ( //layout <>
<div className="mainPage">
    <div className="mainWindow">
        <HomepageWindow setSearchCategory={setSearchCategory}/>
        <TrendingNowWindow setWishlist={setWishlist} setCart={setCart}/>
    </div>
</div> //</>
    );
};

export default HomepageTab;