import React from 'react';
import ShopMen from "./../../assets/shopMan.jpg";
import ShopWoman from "./../../assets/shopWoman.jpg"

const Directory = props => {
    return (
    <div>
        <div style={{
            backgroundImage : `url(${ShopMen})`
        }}></div>

<div style={{
            backgroundImage : `url(${ShopWoman})`
        }}></div>
    </div>
    
    )
}


export default Directory;