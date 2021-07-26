import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemsPageSmart from "./itemsPage/ItemsPageSmart";
import NavBar from "./Navbar";
import SignInSmart from "./SignInRegister/SignInSmart";
import React, { useState } from "react";
import HomePage from "./HomePage";
import RegisterSmart from "./SignInRegister/RegisterSmart";
import NewBid from "./addNewBid/NewBid";
import NewBidSmart from "./addNewBid/NewBidSmart";
import RoutesApp from "./RoutesApp";
import Signout from "./SignInRegister/Signout";
import BidPageSmart from "./Bid/BidPageSmart";
import { FileUpload } from "./FileUpload/FileUpload";
import { FormExample } from "./FileUpload/FormExample";
import { AdminPage } from "./Admin/AdminPage";

export default function Routes() {
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
          <Route exact path="/">
            {<SignInSmart></SignInSmart>}
          </Route>
          <Route exact path="/signout">
            {<Signout></Signout>}
          </Route>
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
          <Route
            exact
            path="/items/:id"
            component={(props) => <BidPageSmart match={props.match} />}
          />
          <Route exact path="/upload">
            <div className="container mt-4">
              <h4 className="display-4 text-center mb-4">File Upload</h4>
              <FileUpload />
            </div>
          </Route>
          <Route exact path="/addForm">
            <FormExample></FormExample>
          </Route>
          <Route exact path="/adminPage">
            <AdminPage></AdminPage>
          </Route>
          {/* {<div>Hello <BidPageSmart></BidPageSmart></div>}
            </Route> */}

          {/* <Route exact path="/items">
              {<ItemsPageSmart></ItemsPageSmart>}
            </Route>
            <Route exact path="/home">
              {<HomePage />}
            </Route>
            <Route exact path="/register">
              {<RegisterSmart></RegisterSmart>}
            </Route>
            <Route exact path='/addBid'>
              {<NewBidSmart></NewBidSmart>}
            </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
