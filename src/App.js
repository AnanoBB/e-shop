import React from 'react';
import Header from './components/header';
import Homepage from "./pages/homepage";
import Registration from "./pages/Registration";
import  {Switch,Route} from 'react-router-dom' 
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component = {Homepage}/>
          <Route path="/registarion" component={Registration}/>
        </Switch>
       
      
      
      </div>
      
      
    </div>
  );
}

export default App;

