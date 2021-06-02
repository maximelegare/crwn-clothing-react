import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shopPage.component"
import Header from "./components/TheHeader/header.component"
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import { auth } from './firebase/firebase.utils'
import { Component } from 'react'

import "./App.css";

class App extends Component{
  constructor(){
    super()
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/signin" component={SignInAndSignOut} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}



export default App;
