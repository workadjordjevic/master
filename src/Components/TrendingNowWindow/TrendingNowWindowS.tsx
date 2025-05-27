import React, {FC, useRef} from 'react';
import "./TrendingNowWindow.css";
import DSCoverArt from "../../Images/death-stranding-cover-art.jpg";
import DCoverArt from "../../Images/doom-cover-art.jpg";
import GOTCoverArt from "../../Images/ghost-of-tsushima-cover-art.jpg";
import TOWCoverArt from "../../Images/the-outer-worlds-cover-art.jpg"
import BG3CoverArt from "../../Images/baldur's-gate-3-cover-art.jpg"
import CP2077CoverArt from "../../Images/cyberpunk2077-cover-art.jpg"
import PalCoverArt from "../../Images/palworld-cover-art.jpg"
import SSDTCoverArt from "../../Images/sekiro-shadows-die-twice-cover-art.jpg"
import TrendingNowCard from "../TrendingNowCard/TrendingNowCard";

const TrendingNowWindow : FC = () => {
    const leftArrow = "<";
    const rightArrow = ">";
    const sliderRef = useRef(null);
    const scrollAmount = 150;
    const mockDataArray: {image: any; title: string; description: string; price: number; category?: string[];}[] = [
        {
            image: DSCoverArt,
            title: "Death Stranding",
            description: "Death Stranding is a 2019 action-adventure game developed by Kojima Productions.",
            price: 60,
            category: ["Open World", "Walking Simulator", "Sci-fi", "Story Rich"],
        },
        {   image: DCoverArt,
            title: "Doom",
            description: "Doom is a 2016 first-person shooter game developed by id Software.",
            price: 50,
            category: ["FPS", "Gore", "Action", "Shooter"],
        },
        {   image: GOTCoverArt,
            title: "Ghost of Tsushima",
            description: "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions.",
            price: 40,
            category: ["Action", "Adventure", "Stealth"],
        },
        {   image: TOWCoverArt,
            title: "The Outer Worlds",
            description: "The Outer Worlds is a 2019 action role-playing game developed by Obsidian Entertainment.",
            price: 45,
            category: ["Open World", "RPG"],
        },
        {   image: BG3CoverArt,
            title: "Baldur's Gate 3",
            description: "Baldur's Gate 3 is a 2023 role-playing video game developed and published by Larian Studios.",
            price: 60,
            category: ["Action", "Adventure", "Fantasy", "RPG"],
        },
        {   image: CP2077CoverArt,
            title: "Cyberpunk 2077",
            description: "Cyberpunk 2077 is a 2020 action role-playing game developed by CD Projekt Red.",
            price: 50,
            category: ["Open World", "RPG" ,"Sci-fi"],
        },
        {   image: PalCoverArt,
            title: "Palworld",
            description: "Palworld is an action-adventure, survival, and monster-taming game created and published by Japanese developer Pocketpair.",
            price: 35,
            category: ["Open World", "Survival" ,"Co-op"],
        },
        {   image: SSDTCoverArt,
            title: "Sekiro: Shadows Die Twice",
            description: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware.",
            price: 45,
            category: ["Souls-like", "Action"],
        },
    ]

    return (
        <div className="trendingNowWindow">
            <div className="trendingNowHeader">
                <div className="trendingNowHeaderText">Trending now</div>
                <div className="trendingNowArrowButtons">
                    <button className="scrollButton" onClick={() => {
                        const container:any = sliderRef.current;
                        container.scrollLeft -= scrollAmount;
                    }}>{leftArrow}
                    </button>
                    <button className="scrollButton" onClick={() => {
                        const container:any = sliderRef.current;
                        container.scrollLeft += scrollAmount;
                    }}>{rightArrow}
                    </button>
                </div>
            </div>
            <div className="trendingCardList" ref={sliderRef}>
                {mockDataArray.map((gameCard ) =>
                    <TrendingNowCard image={gameCard.image} title={gameCard.title}
                                     description={gameCard.description} price={gameCard.price} key={gameCard.title} />
                )}
            </div>
        </div>
    );
};

export default TrendingNowWindow;