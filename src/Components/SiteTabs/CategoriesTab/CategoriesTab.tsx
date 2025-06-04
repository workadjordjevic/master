import React, {useState} from 'react';
import {mockDataArray} from "../../Utils/mockDataAttay";
import {IMockData} from "../../../Interfaces/Interfaces";
import TrendingNowCard from "../../TrendingNowCard/TrendingNowCard";
import CustomButton from "../../UI/CustomButton";

const CategoriesTab = () => {

    const [searchCategory, setSearchCategory] = useState("");
    let searchRes: IMockData[] = [];
    // let searchCategory = "";

    function searchResult (request:string[]){
        searchRes = mockDataArray.filter((game:IMockData) => game.category === request);
    }

    return (
        <div>
            <div>
                <input type="text" value={searchCategory} id="searchCategoryInput" onChange={(e) => setSearchCategory(e.target.value)}
                       placeholder="Enter a category" />
                <CustomButton type="submit" label="Search" />
            </div>
            <div className="searchResults">
                {searchRes.length ?
                    searchRes.map(game => <TrendingNowCard image={game.image} title={game.title}
                                                           description={game.description} price={game.price} key={game.title} />)
                    :
                    <div>No matches</div>
                }
            </div>
        </div>
    );
};

export default CategoriesTab;