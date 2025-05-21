import React from 'react';
import "./GameDescription.css"

const GameDescription = () => {
    const description = "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. It's an open world game with a third-person perspective.";
    return (
        <div className="gameDescription">{description}</div>
    );
};

export default GameDescription;