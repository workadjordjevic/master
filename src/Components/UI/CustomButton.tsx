import React from 'react';
import {ICustomButton} from "../../Interfaces/Interfaces";

const CustomButton = ({label,onClick}:ICustomButton) => {
    return (
        <button onClick={onClick}>
            <p>{label}</p>
        </button>
    );
};

export default CustomButton;