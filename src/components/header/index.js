import React from 'react';
import "./styles.scss";
import logo from "./../../assets/pngegg.png";
import { Link } from 'react-router-dom'


const Header = props => {
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to='/'>
                    <img src={logo} alt = "logo" width="100px" height="100px" />
                    </Link>
                   
                </div>

                <div className='callToActions'>
                <ul>
                    <li>
                        <Link to="/registarion">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            </div>

         
        </header>
    )
}


export default Header;