import React, { Component, useState } from "react";
import "../styles/Nav.css";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import store from "../store/store";
import { useSelector } from "react-redux";

const NavBar = () => {
  const counter = useSelector((state) => state.isSuccess);
  console.log("contr, ", counter);
  const [s, setS] = useState(false);
  if (store.getState().isSuccess) {
    setS(store.getState().isSuccess);
  }
  const logout = () => {
    // localStorage.removeItem("isAuthenticated");
    localStorage.clear();
  };

  console.log(s);

  return (
    <div>
      <Navbar className="navbar fixed-top" expand="lg">
        <Navbar.Brand className="navbarbrand" href="/home">
          <img className="image" src="/images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle className="toggleicon" />
        <Navbar.Collapse id="basic-navbar-nav" className="text">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#1">
              <Link className="navlink active" to="/home">
                Home
              </Link>
            </Nav.Link> */}
            {/* <Nav.Link href="">
              <Link className="navlink" to="/signout">
                Sign Out
              </Link>
            </Nav.Link> */}
            <Nav.Link href="#2">
              <Link className="navlink" to="/items">
                Auctions
              </Link>
            </Nav.Link>
            <Nav.Link href="#3">
              <Link className="navlink" to="/addbid">
                Add Bid
              </Link>
            </Nav.Link>
            <Nav.Link href="#4">
              <Link className="navlink" to="/myItems">
                My Items
              </Link>
            </Nav.Link>
            <Nav.Link href="#5">
              <Link className="navlink" to="/onBiddedItems">
                My Bids
              </Link>
            </Nav.Link>
            <Nav.Link href="#6">
              <Link className="navlink" to="/wonItems">
                Won Items
              </Link>
            </Nav.Link>
          </Nav>
          <div className="">
            <div className="header-right-wrap">
              <div className="dropdown">
                <button
                  class="accountbtn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaRegUserCircle className="icon"></FaRegUserCircle>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="/" onClick={logout}>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
