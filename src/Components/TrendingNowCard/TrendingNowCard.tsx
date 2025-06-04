import React from 'react';
import "./TrendingNowCard.css";
import {IPropsTrendingNowCard} from "../../Interfaces/Interfaces";
import {calcDiscount} from "../Utils/calcDiscount";

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
                {
                    props.hasDiscount?
                        <button>${calcDiscount(props.price, props.discountAmount)}</button> :
                        <div></div>
                }
            </div>
        </div>
    );
};

export default TrendingNowCard;