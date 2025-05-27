import React from 'react';
import "./SidebarTab.css";
import {ISidebarTab} from "../../Interfaces/Interfaces";

const SidebarTab = (props: ISidebarTab) => {
    return (
        <button className="sidebarTab">
            <img src={props.icon} alt="icon"/>
            <div className="tabName">{props.tabName}</div>
        </button>
    );
};

export default SidebarTab;