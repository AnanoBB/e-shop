import React from 'react';
import "./styles.scss";
import logo from "./../../assets/pngegg.png";


const Header = props => {
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt = "logo" width="100px" height="100px" />
                </div>
            </div>
        </header>
    )
}


export default Header;