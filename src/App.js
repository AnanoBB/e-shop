import React from 'react';

import Homepage from "./pages/homepage";
import Registration from "./pages/Registration";
import MainLayout from './layouts/MainLayouts';
import HomepageLayout from './layouts/HomePageLayouts';
import  {Switch,Route} from 'react-router-dom' 
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/"  render={() =>(
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          ) }/>
          <Route path="/registarion" render={()=>(
            <MainLayout>
              <Registration />
            </MainLayout>
          )}/>
        </Switch>

      
      
    </div>
  );
}

export default App;

