import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemsPageSmart from "./itemsPage/ItemsPageSmart";
import NavBar from "./Navbar";
import SignInSmart from "./SignInRegister/SignInSmart";
import React, { useState } from "react";
import HomePage from "./homepage/HomePage";
import RegisterSmart from "./SignInRegister/RegisterSmart";
import NewBid from "./addNewBid/NewBid";
import NewBidSmart from "./addNewBid/NewBidSmart";

export default function RoutesApp() {
  // const [activeIndex, setActiveIndex] = React.useState('home');
  // const [t] = useTranslation();
  // const [user, setUser]= useState(false);
  // if(localStorage.getItem("user")) {
  //   setUser(true)
  // }
  // const handleOnClick = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/items">
            {
              <div>
                <NavBar></NavBar>
                <ItemsPageSmart></ItemsPageSmart>
              </div>
            }
          </Route>
          <Route exact path="/home">
            {
              <div>
                <NavBar></NavBar>
                <HomePage />
              </div>
            }
          </Route>
          <Route exact path="/register">
            {
              <div>
                <NavBar></NavBar>
                <RegisterSmart></RegisterSmart>
              </div>
            }
          </Route>
          <Route exact path="/addBid">
            {
              <div>
                <NavBar></NavBar>
                <NewBidSmart></NewBidSmart>
              </div>
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
