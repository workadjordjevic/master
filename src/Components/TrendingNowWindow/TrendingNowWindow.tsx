import React, {FC,useRef} from 'react';
import "./TrendingNowWindow.css";
import {mockDataArray} from "../Utils/mockDataAttay";
import TrendingNowCard from "../TrendingNowCard/TrendingNowCard";
const SCROLLAMOUNT = 150;


const TrendingNowWindow : FC = () => {
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
                {mockDataArray.map(({image,title,description,price} ) =>
                    <TrendingNowCard image={image} title={title}
                                     description={description} price={price} key={title} />
                )}
            </div>
        </div>
    );
};

export default TrendingNowWindow;