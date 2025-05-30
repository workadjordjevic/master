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
    const siteTabs = [{tabName:"G:PLATFORM", icon:siteIcon},
                                             {tabName:"Home", icon:homeIcon},
                                             {tabName:"Category", icon:categoryIcon},
                                             {tabName:"Buys", icon:buysIcon},
                                             {tabName:"Wishlist", icon:wishlistIcon},];
    return (
        <div className="sidebar">
            <div>
                {siteTabs.map((tab) =>
                    <SidebarTab tabName={tab.tabName} icon={tab.icon} key={tab.tabName}/>)}
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