import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shopPage.component"
import Header from "./components/TheHeader/header.component"
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/signin" component={SignInAndSignOut} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
