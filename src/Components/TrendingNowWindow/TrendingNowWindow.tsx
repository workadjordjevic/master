import React, {FC,useRef} from 'react';
import "./TrendingNowWindow.css";
import {mockDataArray} from "../Utils/mockDataAttay";
import TrendingNowCard from "../TrendingNowCard/TrendingNowCard";
import {IMockData, IPropsTrendingNowCard, IPropsTrendingNowWindow} from "../../Interfaces/Interfaces";
const SCROLLAMOUNT = 150;

const TrendingNowWindow = ({setCart,setWishlist}:IPropsTrendingNowWindow) => {
    const sliderRef= useRef<HTMLDivElement | null>(null);

    function scrollBackwards (){
        const container = sliderRef.current;
        if(!container)
            return;
        container.scrollLeft -= SCROLLAMOUNT;
    }

    function scrollForward (){
        const container = sliderRef.current;
        if(!container)
            return;
        container.scrollLeft += SCROLLAMOUNT;
    }

    function handleAddToCart(game:IMockData){
        setCart( (prevState) => [...prevState, game]);
    }

    return (
        <div className="trendingNowWindow">
            <div className="trendingNowHeader">
                <div className="trendingNowHeaderText">Trending now</div>
                <div className="trendingNowArrowButtons">
                    <button className="scrollButton" onClick={scrollBackwards}>{"<"}
                    </button>
                    <button className="scrollButton" onClick={scrollForward}>{">"}
                    </button>
                </div>
            </div>
            <div className="trendingCardList" ref={sliderRef}>
                {mockDataArray.map((game) =>
                    <TrendingNowCard game={game} key={game.title} onAddCart={handleAddToCart}
                                     setCart={setCart} setWishlist={setWishlist}
                    />
                )}
            </div>
        </div>
    );
};

export default TrendingNowWindow;