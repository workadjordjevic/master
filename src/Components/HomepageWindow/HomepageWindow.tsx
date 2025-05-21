import React from 'react';
import "./HomepageWindow.css";
import image from "../../Images/homepage1.jpg";
import DisplayCategory from "../DisplayCategory/DisplayCategory";
import AddTo from "../AddTo/AddTo";
import GameDescription from "../GameDescription/GameDescription";
import ShadowBackground from "../ShadowBackground/ShadowBackground";

const HomepageWindow = () => {
    return (
        <div className="homepageWindow">
                <img className="homepageImage" src={image}/>
                <DisplayCategory/>
                <AddTo/>
                <GameDescription/>
                <ShadowBackground/>
        </div>
    );
};

export default HomepageWindow;