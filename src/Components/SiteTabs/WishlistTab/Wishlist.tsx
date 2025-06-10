import React from 'react';
import "./Wishlist.css";
import {IPropsWishlist} from "../../../Interfaces/Interfaces";
import TrendingNowCard from "../../TrendingNowCard/TrendingNowCard";

const Wishlist = ({wishlist, setWishlist}:IPropsWishlist) => {
    return (
        <div className="wishlistWindow">
            {wishlist.map((game) => <TrendingNowCard game={game} key={game.title}
            />)}
        </div>
    );
};

export default Wishlist;