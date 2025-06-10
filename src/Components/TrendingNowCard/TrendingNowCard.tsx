import React from 'react';
import "./TrendingNowCard.css";
import {IPropsTrendingNowCard, IPropsTrendingNowCardTest} from "../../Interfaces/Interfaces";
import {calcDiscount} from "../Utils/calcDiscount";
import wishlistIcon from "../../Images/Wishlist.png";

const TrendingNowCard = (props:IPropsTrendingNowCard) => {

    const {game, setCart, setWishlist, onAddCart} = props;

    return (
        <div className="trendingNowCard">
            <div className="gameDetails">
                <img src={game.image} className="gameCoverArt" alt="Game cover art"/>
                <div className="gameTitle"> {game.title} </div>
                <div className="cardGameDescription"> {game.description} </div>
            </div>
            <div className="gamePrice">
               <div>
                   {
                       game.hasDiscount?
                           <button className="discountPriceButton"><div className="oldPrice" onClick={() => onAddCart?.(game)}>${game.price}</div>
                               <div className="discountAmount">-{game.discountAmount}%</div>
                               <div>${calcDiscount(game.price, game.discountAmount)}</div></button> :
                           <button className="gamePriceButton"> ${game.price} </button>
                   }
               </div>
               <div>
                   <button className="addToWishlist"><img src={wishlistIcon} className="wishlistButtonIcon"/></button>
               </div>
            </div>
        </div>
    );
};

export default TrendingNowCard;