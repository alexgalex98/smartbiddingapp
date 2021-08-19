import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemsPageSmart from "./itemsPage/ItemsPageSmart";
import NavBar from "./Navbar";
import SignInSmart from "./SignInRegister/SignInSmart";
import React, { useState } from "react";
import HomePage from "./homepage/HomePage";
import RegisterSmart from "./SignInRegister/RegisterSmart";
import NewBid from "./addNewBid/NewBid";
import NewBidSmart from "./addNewBid/NewBidSmart";
import RoutesApp from "./RoutesApp";
import Signout from "./SignInRegister/Signout";
import BidPageSmart from "./Bid/BidPageSmart";
import { FileUpload } from "./FileUpload/FileUpload";
import { FormExample } from "./FileUpload/FormExample";
import AdminPageSmart from "./Admin/AdminPageSmart";
import MyItemsPageSmart from "./myitems/myItemsPageSmart";
import OnBiddedItemsPageSmart from "./onBiddedItems/onBiddedItemsPageSmart";
import UpdateBid from "./UpdateBid/UpdateBId";
import UpdatePageSmart from "./UpdateBid/UpdatePageSmart";
import WonItemsPageSmart from "./wonItems/wonItemsPageSmart";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
export default function Routes() {
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

          <ProtectedRoute
            exact
            path="/items"
            component={(props) => [
              <NavBar></NavBar>,
              <ItemsPageSmart></ItemsPageSmart>,
            ]}
          />

          <ProtectedRoute
            exact
            path="/home"
            component={(props) => [<NavBar></NavBar>, <HomePage />]}
          ></ProtectedRoute>
          <Route exact path="/register">
            {
              <div>
                <RegisterSmart></RegisterSmart>
              </div>
            }
          </Route>

          <ProtectedRoute
            exact
            path="/addBid"
            component={(props) => [<NavBar></NavBar>, <NewBidSmart />]}
          ></ProtectedRoute>

          <ProtectedRoute
            exact
            path="/items/:id"
            component={(props) => <BidPageSmart match={props.match} />}
          ></ProtectedRoute>

          <ProtectedRouteAdmin
            exact
            path="/adminPage"
            component={(props) => <AdminPageSmart></AdminPageSmart>}
          ></ProtectedRouteAdmin>

          <ProtectedRoute
            exact
            path="/myItems"
            component={(props) => [<NavBar></NavBar>, <MyItemsPageSmart />]}
          ></ProtectedRoute>

          <ProtectedRoute
            exact
            path="/onBiddedItems"
            component={(props) => [
              <NavBar></NavBar>,
              <OnBiddedItemsPageSmart></OnBiddedItemsPageSmart>,
            ]}
          ></ProtectedRoute>

          <ProtectedRoute
            exact
            path="/wonItems"
            component={(props) => [<NavBar />, <WonItemsPageSmart />]}
          />
        </Switch>
      </div>
    </Router>
  );
}
