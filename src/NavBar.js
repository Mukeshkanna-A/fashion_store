import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./NavBar.css";
import image from './images/fashion-designer.png';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="fullnavbar">
      <Container fluid>
      <img src={image} alt="" style={{width:'5rem'}} />
        <Navbar.Brand className="brand_name">
          Exquisite
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto m-2">
            <Button className="btn">
              <Link exact to="/" className="p-2 nav_link">
                Home
              </Link>
            </Button>
            <Button className="btn">
              <Link to="/designs" className="p-2 nav_link">
                Designs
              </Link>
            </Button>
          </Nav>
          <Nav>
            <Button className="btn">
              <Link to="/login" className="p-2 nav_link">
                Log in
              </Link>
            </Button>
          </Nav>
          <Nav>
            <Button variant="dark" className="btn">
              <Link to="/signup" className="p-2 m-2 signup_btn">
                Sign up
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
