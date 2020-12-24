import React, { Component } from 'react';

import Homepage from "./pages/homepage";
import {auth} from './firebase/utils'
import Registration from "./pages/Registration";
import MainLayout from './layouts/MainLayouts';
import HomepageLayout from './layouts/HomePageLayouts';
import Login from './pages/Login';
import  {Switch,Route,Redirect} from 'react-router-dom' 
import "./default.scss";

const initialState = {
  currentUser : null
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
  }

  authListener = null;

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if(!userAuth){
        this.setState({
          ...initialState
        });
      }

      this.setState({
        currentUser:userAuth
      })
    })
  }

  componentWillUnmount(){
      this.authListener();
  }


  render(){

    const {currentUser} = this.state;
  return (
    <div className="App">
      <Switch>
          <Route exact path="/"  render={() =>(
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
          ) }/>
          <Route path="/registarion" render={()=>(
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          )}/>

          <Route path="/login" 
          render={()=> currentUser ? <Redirect to="/" /> : (
                      <MainLayout currentUser={currentUser}>
                        <Login />
                      </MainLayout>
                    )}/>
        </Switch>

      
      
    </div>
  );
          }
}

export default App;

