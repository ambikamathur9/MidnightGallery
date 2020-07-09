import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/LOGO4.png";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="s" bg="dark" variant="dark">
      <a href="/">
        {" "}
        <img className="logo" alt={logo} src={logo} />{" "}
        <span>
          <Navbar.Brand href="/">Midnight Gallery</Navbar.Brand>
        </span>
      </a>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/rooms">Rooms</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
