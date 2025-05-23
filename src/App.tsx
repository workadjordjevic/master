import React from 'react';
import './App.css';
import HomepageWindow from "./Components/HomepageWindow/HomepageWindow";
import TrendingNowWindow from "./Components/TrendingNowWindow/TrendingNowWindow";

function App() {
  return (
    <div className="app">
      <HomepageWindow/>
      <TrendingNowWindow/>
    </div>
  );
}

export default App;
