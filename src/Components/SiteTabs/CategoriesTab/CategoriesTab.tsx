import React, {useMemo, useState} from 'react';
import {mockDataArray} from "../../Utils/mockDataAttay";
import {IMockData, ISearchCategory, SearchCategory} from "../../../Interfaces/Interfaces";
import TrendingNowCard from "../../TrendingNowCard/TrendingNowCard";
import CustomButton from "../../UI/CustomButton";
import {arrayOfAutocompleteData} from "../../Utils/arrayOfAutocompleteData";

const CategoriesTab = ({searchCategory, setSearchCategory}: ISearchCategory) => {

    const [searchRes, setSearchRes] = useState<IMockData[]>([]);
    const suggestions = useMemo(() => autoComplete(searchCategory), [searchCategory]);

    function autoComplete(input: string) {
        return arrayOfAutocompleteData.filter(item => item.value.toLowerCase().includes(input.toLowerCase()));
    }

    function searchResult (request:string){
        setSearchRes(mockDataArray.filter((game:IMockData) =>
        !!game.category?.find((item) => item.toLowerCase().includes(request.toLowerCase()))));
    }

    return (
        <div>
            <div>
                <input type="text" value={searchCategory} id="searchCategoryInput" onChange={(e) => setSearchCategory(e.target.value)}
                       placeholder="Enter a category" />
                <CustomButton onClick={() => searchResult(searchCategory)} label="Search"/>
                <div>
                    {suggestions.map((category) => <button onClick={() => setSearchCategory(category.value)}>{category.value}</button> )}
                </div>
            </div>
            <div className="searchResults">
                {searchRes.length ?
                    searchRes.map(game => <TrendingNowCard game={game} key={game.title} />)
                    :
                    <div>No matches</div>
                }
            </div>
        </div>
    );
};

export default CategoriesTab;