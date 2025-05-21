import React from 'react';
import "./DisplayCategory.css"

const DisplayCategory = () => {
    const mockCategories = ["Action", "Adventure", "Open World"];
    return (
        <div className="displayCategoryWindow">
            { mockCategories.map((category) =>
                <button className="categoryButton" key={category}>
                    <p className="categoryTextColor">{category}</p>
                </button>)
            }
        </div>
    );
};

export default DisplayCategory;