import React from 'react';
import Header from './../components/header'

const HomepageLayout = props =>{
   return(
    <div className = "fullheight">
        <Header />
        
        {props.children}
       
    </div>
   );
};


export default HomepageLayout;
