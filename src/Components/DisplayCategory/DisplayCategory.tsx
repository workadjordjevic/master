import React from 'react';
import "./DisplayCategory.css"
import {IDisplayCategoryButton} from "../../Interfaces/Interfaces";

const DisplayCategory = ({categories, onClick} :IDisplayCategoryButton) => {
    const mockCategories = ["Action", "Adventure", "Open World"];
    return (
        <div className="displayCategoryWindow">
            { mockCategories.map((category) =>
                <button className="categoryButton" key={category} onClick={()=> onClick(category)}>
                    <p className="categoryTextColor">{category}</p>
                </button>)
            }
        </div>
    );
};

export default DisplayCategory;