import React from 'react';
import "./SidebarLink.css";
import {ISidebarTab} from "../../../../Interfaces/Interfaces";

const SidebarLink = ({tabName, icon, isDisabled}: ISidebarTab) => {

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

export default SidebarLink;