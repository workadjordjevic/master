import React from 'react';
import "./SidebarTab.css";
import SidebarLink from "./SidebarLink/SidebarLink";
import homeIcon from "../../../Images/Home.png";
import categoryIcon from "../../../Images/Category.png"
import buysIcon from "../../../Images/Buys.png"
import wishlistIcon from "../../../Images/Wishlist.png"
import siteIcon from "../../../Images/SiteIcon.png"
import userIcon from "../../../Images/User.png"


const SidebarTab = () => {
//     const siteTabs = [{tabName:"G:PLATFORM", icon:siteIcon},
//                                              {tabName:"Home", icon:homeIcon},
//                                              {tabName:"Category", icon:categoryIcon},
//                                              {tabName:"Buys", icon:buysIcon},
//                                              {tabName:"Wishlist", icon:wishlistIcon},];
    return (
        <div className="sidebar">
            <div>
                {/*{siteTabs.map((tab) =>*/}
                {/*    <SidebarLink tabName={tab.tabName} icon={tab.icon} key={tab.tabName}/>)}*/}
                <SidebarLink tabName="G:PLATFORM" icon={siteIcon} isDisabled={true}/>
                <SidebarLink tabName="Home" icon={homeIcon}/>
                <SidebarLink tabName="Category" icon={categoryIcon}/>
                <SidebarLink tabName="Buys" icon={buysIcon}/>
                <SidebarLink tabName="Wishlist" icon={wishlistIcon}/>
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

export default SidebarTab;