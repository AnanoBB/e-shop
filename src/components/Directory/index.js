import React from 'react';
import ShopMen from "./../../assets/shopMens.jpg";
import ShopWoman from "./../../assets/shopWomens.jpg"
import "./styles.scss"

const Directory = props => {
    return (
    <div className="directory">
        <div className="wrap">
        <div className="item" style={{
            backgroundImage : `url(${ShopMen})`
        }}>
            <a href="!#">Shop Men's</a>
        </div>

<div className ="item" style={{
            backgroundImage : `url(${ShopWoman})`
        }}>
            <a href="!#">Shop Women's</a>
        </div>
        </div>

    </div>
    
    )
}


export default Directory;