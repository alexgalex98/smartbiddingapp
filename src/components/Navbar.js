import React, { Component, useState} from 'react'
import { Button,Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import store from '../store/store';
import { useSelector } from 'react-redux'


const NavBar =() =>{
    const counter = useSelector(state => state.isSuccess)
    console.log("contr, ",counter)
    const [s, setS]= useState(false)
    if(store.getState().isSuccess){
        setS(store.getState().isSuccess)
    }
   
    console.log(s)
   
     return(
    <div>
      {/* {s === false  ||s === undefined ? (
      
        <nav>   
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/signin">SignIn</Link>
        </li>
        <li>
            <Link to="/items">Auctions</Link>
        </li>
        </ul>
    </nav>
    
       ): ( */}
        {/* <nav>   
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/out">Sign Out</Link>
            </li>
            <li>
                <Link to="/items">Auctions</Link>
            </li>
            </ul>
        </nav> */}
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Smartbidding</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home"> <Link to="/home">Home</Link></Nav.Link>
                <Nav.Link href="#signOut"><Link to="/signout">Sign Out</Link></Nav.Link>
                <Nav.Link href="#auctions"><Link to="/items">Auctions</Link></Nav.Link>
                <Nav.Link href="newBid"><Link to="/addbid">Add Bid</Link></Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                {/* <Button variant="outline-success">Search</Button> */}
                </Form>
            </Navbar.Collapse>
        </Navbar>
 
       </div>
           
     ) 
}
export default NavBar