// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "./Header.css"

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">EMMA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Left-aligned navigation links */}
        <Nav className="mr-auto">
          <Nav.Link as={HashLink} smooth to="/#about">
            About
          </Nav.Link>
          <Nav.Link as={HashLink} smooth to="/#contact">
            Get in Touch
          </Nav.Link>
          <Nav.Link as={Link} to="/meet-the-team">
            Meet the Team
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* Right-aligned Employee Login Button outside Navbar.Collapse */}
      <Button className="login" as={Link} to="/employee-login" variant="outline-light" className="ml-auto">
        Employee Login
      </Button>
    </Navbar>
  );
}

export default Header;
