import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Header.css'

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  // Update `isMobile` state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to close the navbar when a link is clicked
  const handleLinkClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={isCollapsed}
      onToggle={() => setIsCollapsed(!isCollapsed)}
      className="custom-navbar"
    >
      <Navbar.Brand as={Link} to="/" className="brand-padding">EMMA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsCollapsed(!isCollapsed)} />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
        {/* Left-aligned navigation links */}
        <Nav className="nav-links" onClick={handleLinkClick}>
          <Nav.Link as={HashLink} smooth to="/#about">
            About
          </Nav.Link>
          <Nav.Link as={HashLink} smooth to="/#contact">
            Get in Touch
          </Nav.Link>
          <Nav.Link as={Link} to="/meet-the-team">
            Meet the Team
          </Nav.Link>
          <Nav.Link as={Link} to="/meet-the-team">
            What is an apprenticeship?
          </Nav.Link>
        </Nav>

        {/* Conditionally render Employee Login Button based on screen size */}
        {isMobile ? (
          <Nav className="employee-login-sm">
            <Nav.Item className="mt-3">
              <Button as={Link} to="/employee-login" variant="outline-light" block>
                Employee Login
              </Button>
            </Nav.Item>
          </Nav>
        ) : (
          <div className="employee-login-lg">
            <Button as={Link} to="/employee-login" variant="outline-light">
              Employee Login
            </Button>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;