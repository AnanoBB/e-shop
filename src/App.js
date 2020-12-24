import React from 'react';

import Homepage from "./pages/homepage";
import Registration from "./pages/Registration";
import MainLayout from './layouts/MainLayouts'
import  {Switch,Route} from 'react-router-dom' 
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/"  render={() =>(
            <MainLayout>
              <Homepage />
            </MainLayout>
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

