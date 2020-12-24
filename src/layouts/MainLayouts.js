import React from 'react';
import Header from './../components/header'

const MainLayout = props =>{
   return(
    <div>
        <Header />
        <div className='main'>
            {props.children}
        </div>
    </div>
   );
};


export default MainLayout;
