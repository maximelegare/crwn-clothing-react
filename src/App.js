import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";


import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shopPage.component";
import Header from "./components/TheHeader/header.component";
import SignInAndSignOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import CheckoutPage from "./pages/checkout/checkout.component";

// import {
//   auth,
//   createUserProfileDocument,
// } from "./firebase/firebase.utils";

import { selectCurrentUser } from "./redux/user/users.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignOut />
              )
            }
          />
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
