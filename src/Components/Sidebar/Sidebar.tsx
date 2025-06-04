import React, { lazy,Suspense } from 'react';
// import {Routes, Route } from 'react-router-dom';
import "./Sidebar.css";
import SidebarTab from "../SidebarTab/SidebarTab";
import homeIcon from "../../Images/Home.png";
import categoryIcon from "../../Images/Category.png"
import buysIcon from "../../Images/Buys.png"
import wishlistIcon from "../../Images/Wishlist.png"
import siteIcon from "../../Images/SiteIcon.png"
import userIcon from "../../Images/User.png"

const Sidebar = () => {

//     const HomepageWindow = lazy (() => import("../HomepageWindow/HomepageWindow"));
//     const Categories = lazy (() => import("../CategoriesTab/CategoriesTabA"));
//     const siteTabs = [{tabName:"G:PLATFORM", icon:siteIcon},
//                                              {tabName:"Home", icon:homeIcon},
//                                              {tabName:"Category", icon:categoryIcon},
//                                              {tabName:"Buys", icon:buysIcon},
//                                              {tabName:"Wishlist", icon:wishlistIcon},];
    return (
        <div className="sidebar">
            <div>
                {/*{siteTabs.map((tab) =>*/}
                {/*    <SidebarTab tabName={tab.tabName} icon={tab.icon} key={tab.tabName}/>)}*/}
                <SidebarTab tabName="G:PLATFORM" icon={siteIcon} isDisabled={true}/>
                <SidebarTab tabName="Home" icon={homeIcon}/>
                <SidebarTab tabName="Category" icon={categoryIcon}/>
                <SidebarTab tabName="Buys" icon={buysIcon}/>
                <SidebarTab tabName="Wishlist" icon={wishlistIcon}/>

                {/*<Suspense fallback={<div>Loading...</div>}>*/}
                {/*    <Routes>*/}
                {/*        <Route path='home' element={<HomepageWindow />} > </Route>*/}
                {/*        <Route path='categories' element={<Categories />}> </Route>*/}
                {/*    </Routes>*/}
                {/*</Suspense>*/}
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