import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
  
const NavBar = () => (
  
<> 
  <Navbar bg="info" expand="lg" >
  <Navbar.Brand href="#home">BatshnDash</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-center">
        <Link to="/" className="nav-link"> Home </Link>
        <Link to="/about" className="nav-link"> About </Link>
        <Link to="/work" className="nav-link">  Work </Link>
        <Link to="/contact" className="nav-link"> Contact </Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
</>

)

export default NavBar;
