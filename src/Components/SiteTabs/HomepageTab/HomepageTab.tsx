import React from 'react';
import Sidebar from "../SidebarTab/SidebarTab";
import HomepageWindow from "./HomepageWindow/HomepageWindow";
import "./HomepageTab.css";
import {ISetSearchCategory} from "../../../Interfaces/Interfaces";
import TrendingNowWindow from "../../TrendingNowWindow/TrendingNowWindow";

const HomepageTab = ({setSearchCategory}:ISetSearchCategory) => {
    return (
<div className="mainPage">
    <Sidebar/>
    <div className="mainWindow">
        <HomepageWindow setSearchCategory={setSearchCategory}/>
        <TrendingNowWindow/>
    </div>
</div>
    );
};

export default HomepageTab;