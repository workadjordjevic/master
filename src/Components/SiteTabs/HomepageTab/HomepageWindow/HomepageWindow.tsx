import React from 'react';
import "./HomepageWindow.css";
import image from "../../../../Images/homepage1.jpg";
import DisplayCategory from "../../../DisplayCategory/DisplayCategory";
import favButton from "../../../../Images/favButton.png";
import {ISetSearchCategory} from "../../../../Interfaces/Interfaces";

const HomepageWindow = ({setSearchCategory}:ISetSearchCategory) => {
    const Price = 24.00;
    const description = "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. It's an open world game with a third-person perspective.";
    return (
        <div className="homepageWindow">
                <img className="homepageImage" alt="Homepage image" src={image}/>
                <DisplayCategory onClick={setSearchCategory}/>
                <div className="shadow"></div>
                <div className="addTo">
                    <button className="addToCart" type="submit" onClick={()=> console.log("click")}><p className="addToBasketText">Buy Now! | ${Price}</p></button>
                    <button className="addToFavorites"><img src={favButton} alt="F" className="favButton"/></button>
                </div>
                <div className="gameDescription">{description}</div>
        </div>
    );
};

export default HomepageWindow;