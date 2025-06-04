import React, {useState} from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import HomepageWindow from "./Components/HomepageWindow/HomepageWindow";
// import TrendingNowWindow from "./Components/TrendingNowWindow/TrendingNowWindow";
import TrendingNowWindowS from "./Components/TrendingNowWindow/TrendingNowWindow";
import CategoriesTab from "./Components/CategoriesTab/CategoriesTab";
import CategoriesTabA from "./Components/CategoriesTab/CategoriesTabA";

function App() {

    const [searchCategory, setSearchCategory] = useState("");

  return (
    <div className="app">
        <div className="mainPage">
            <Sidebar/>
            <div className="mainWindow">
                <HomepageWindow setSearchCategory={setSearchCategory}/>
                <TrendingNowWindowS/>
            </div>
        </div>
        <CategoriesTabA searchCategory={searchCategory} setSearchCategory={setSearchCategory}/>
    </div>
  );
}

export default App;


//https://dev.to/aneeqakhan/building-an-image-slider-with-smooth-scrolling-using-react-1jdb