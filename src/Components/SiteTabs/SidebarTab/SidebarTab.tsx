import React from 'react';
import "./SidebarTab.css";
import SidebarLink from "./SidebarLink/SidebarLink";
import homeIcon from "../../../Images/Home.png";
import categoryIcon from "../../../Images/Category.png"
import buysIcon from "../../../Images/Buys.png"
import wishlistIcon from "../../../Images/Wishlist.png"
import siteIcon from "../../../Images/SiteIcon.png"
import userIcon from "../../../Images/User.png"
import {Link} from "react-router-dom";


const SidebarTab = () => {

    return (
        <div className="sidebar">
            <div className="sidebarTabs">
                <button disabled className={`siteName`}> <img className="siteIcon" src={siteIcon} alt="icon"/><div className="tabName">G:PLATFORM</div></button>
                <Link key="Home" to="/"><SidebarLink tabName="Home" icon={homeIcon}/></Link>
                <Link key="Categories" to="/categories"><SidebarLink tabName="Categories" icon={categoryIcon}/></Link>
                <Link key="Buys" to="/cart"><SidebarLink tabName="Buys" icon={buysIcon}/></Link>
                <Link key="Wishlist" to="/wishlist"><SidebarLink tabName="Wishlist" icon={wishlistIcon}/></Link>
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