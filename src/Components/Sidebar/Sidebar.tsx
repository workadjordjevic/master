import React from 'react';
import "./Sidebar.css";
import SidebarTab from "../SidebarTab/SidebarTab";
import homeIcon from "../../Images/Home.png";
import categoryIcon from "../../Images/Category.png"
import buysIcon from "../../Images/Buys.png"
import wishlistIcon from "../../Images/Wishlist.png"
import siteIcon from "../../Images/SiteIcon.png"
import userIcon from "../../Images/User.png"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <SidebarTab icon={siteIcon} tabName="G:PLATFORM"/>
                <div className="emptySpace"></div>
                <SidebarTab icon={homeIcon} tabName="Home"/>
                <SidebarTab icon={categoryIcon} tabName="Category"/>
                <SidebarTab icon={buysIcon} tabName="Buys"/>
                <SidebarTab icon={wishlistIcon} tabName="Wishlist"/>
            </div>
            <div className="currentUser">
                <img src={userIcon} className="userIcon" alt="user icon" />
                <div className="userInfo">
                    <div className="usernameText">Username</div>
                    <div className="emailText">e-mail@mail.com</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;