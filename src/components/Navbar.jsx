import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./components.css";
function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>Star Wars Lists</Navbar.Brand>
        <Nav>
          <Link to="/" className="nav__item">
            People
          </Link>
          <Link to="/planets" className="nav__item">
            Planets
          </Link>
          <Link to="/ships" className="nav__item">
            StarShips
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
