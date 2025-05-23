import React from 'react';
import "./TrendingNowCard.css";
import {IPropsTrendingNowCard} from "../../Interfaces/Interfaces";

const TrendingNowCard = (props:IPropsTrendingNowCard) => {
    return (
        <div className="trendingNowCard">
            <div className="gameDetails">
                <img src={props.image} className="gameCoverArt" alt="Game cover art"/>
                <div className="gameTitle"> {props.title} </div>
                <div className="cardGameDescription"> {props.description} </div>
            </div>
            <div className="gamePrice">
                <button className="gamePriceButton"> ${props.price} </button>
            </div>
        </div>
    );
};

export default TrendingNowCard;