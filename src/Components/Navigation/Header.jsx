import React from "react";
import logo from "../Assets/logo.png";
import "./Header.css";


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <div className="navLinks">
                <span> Portfolio </span>
                <span> Contacts</span>
            </div>
        </div>
    )
}

export default Header;