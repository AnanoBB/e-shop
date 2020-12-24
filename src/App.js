import React, { Component } from 'react';

import Homepage from "./pages/homepage";
import {auth, handleUserProfile} from './firebase/utils'
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
    this.authListener = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>
          {
            this.setState({
              currentUser : {
                id:snapshot.id,
                ...snapshot.data()


              }
            })
          });
      }

      this.setState({
        ...initialState
      });
     
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

