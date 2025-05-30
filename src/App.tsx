import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import HomepageWindow from "./Components/HomepageWindow/HomepageWindow";
// import TrendingNowWindow from "./Components/TrendingNowWindow/TrendingNowWindow";
import TrendingNowWindowS from "./Components/TrendingNowWindow/TrendingNowWindow";
import CategoriesTab from "./Components/CategoriesTab/CategoriesTab";
import CategoriesTabA from "./Components/CategoriesTab/CategoriesTabA";

function App() {
  return (
    <div className="app">
        <div className="mainPage">
            <Sidebar/>
            <div className="mainWindow">
                <HomepageWindow/>
                <TrendingNowWindowS/>
            </div>
        </div>
        {/*<CategoriesTabA/>*/}
    </div>
  );
}

export default App;


//https://dev.to/aneeqakhan/building-an-image-slider-with-smooth-scrolling-using-react-1jdb