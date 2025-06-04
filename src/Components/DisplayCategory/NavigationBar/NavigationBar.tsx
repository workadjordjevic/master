import React from 'react';
import { Link,useLocation} from "react-router-dom";
import './NavigationBar.css';


const NavigationBar = () => {
    const location = useLocation();
    return (
        <nav className={`navBar`}>
            <Link className={`navbar__tab ${(location.pathname==="/home")? "navbar__tab--selected" : ""} navbar__tab__home`} to='/home'> Home </Link>
            <Link className={`navbar__tab ${(location.pathname==="/categories")? "navbar__tab--selected" : ""} navbar__tab__weather`} to='/categories'> Categories </Link>
        </nav>
    );
};

export default NavigationBar;