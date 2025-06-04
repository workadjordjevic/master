import React from 'react';
import "./SidebarTab.css";
import {ISidebarTab} from "../../Interfaces/Interfaces";

const SidebarTab = ({tabName, icon, isDisabled}: ISidebarTab) => {

    function disabledButtonClass() {
        if(isDisabled)
            return "disabled"
        else
            return "";
    }

    return (
        <button className={`sidebarTab  ${disabledButtonClass()}`}>
            <img src={icon} alt="icon"/>
            <div className="tabName">{tabName}</div>
        </button>
    );
};

export default SidebarTab;