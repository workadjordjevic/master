import React from 'react';
import "./SidebarLink.css";
import {ISidebarTab} from "../../../../Interfaces/Interfaces";

const SidebarLink = ({tabName, icon, isDisabled}: ISidebarTab) => {

    return (
        <button className={`sidebarTab`}>
            <img src={icon} alt="icon"/>
            <div className="tabName">{tabName}</div>
        </button>
    );
};

export default SidebarLink;