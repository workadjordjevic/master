import React, {FC} from 'react';
import "./TrendingNowWindow.css";
import DSCoverArt from "../../Images/death-stranding-cover-art.jpg";
import DCoverArt from "../../Images/doom-cover-art.jpg";
import GOTCoverArt from "../../Images/ghost-of-tsushima-cover-art.jpg";
import TOWCoverArt from "../../Images/the-outer-worlds-cover-art.jpg"
import TrendingNowCard from "../TrendingNowCard/TrendingNowCard";

const TrendingNowWindow : FC = () => {
    const leftArrow = "<";
    const rightArrow = ">";
    const mockDataArray: {image: any; title: string; description: string; price: number;}[] = [
        {   image: DSCoverArt,
            title: "Death Stranding",
            description: "Death Stranding is a 2019 action-adventure game developed by Kojima Productions.",
            price: 60,
        },
        {   image: DCoverArt,
            title: "Doom",
            description: "Doom is a 2016 first-person shooter game developed by id Software.",
            price: 50,
        },
        {   image: GOTCoverArt,
            title: "Ghost of Tsushima",
            description: "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions.",
            price: 40,
        },
        {   image: TOWCoverArt,
            title: "The Outer Worlds",
            description: "The Outer Worlds is a 2019 action role-playing game developed by Obsidian Entertainment.",
            price: 45,
        },
    ]

    return (
        <div className="trendingNowWindow">
            <div className="trendingNowHeader">
                <div className="trendingNowHeaderText">Trending now</div>
                <div className="trendingNowArrowButtons">
                    <button>{leftArrow}</button>
                    <button>{rightArrow}</button>
                </div>
            </div>
            <div className="trendingCardList">
                {mockDataArray.map((gameCard ) =>
                    <TrendingNowCard image={gameCard.image} title={gameCard.title}
                                     description={gameCard.description} price={gameCard.price} key={gameCard.title} />
                )}
            </div>
        </div>
    );
};

export default TrendingNowWindow;