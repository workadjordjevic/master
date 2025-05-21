import React from 'react';
import "./AddTo.css";
import favButton from "../../Images/favButton.png";

const AddTo = () => {
    const Price = "$24.00";
    return (
        <div className="addTo">
            <button className="addToBasket"><p className="addToBasketText">Buy Now! | {Price}</p></button>
            <button className="addToFavorites"><img src={favButton} className="favButton"/></button>
        </div>
    );
};

export default AddTo;