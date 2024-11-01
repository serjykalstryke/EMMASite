import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import './Header.css'

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`navbar-toggler ${isCollapsed ? "toggler-active" : ""}`}
      >
        <span className="custom-toggler-icon">
          <FontAwesomeIcon icon={faBars} color="var(--electric-blue)" />
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
        <Nav className="nav-links" onClick={handleLinkClick}>
          <Nav.Link as={HashLink} smooth to="/#about">About</Nav.Link>
          <Nav.Link as={HashLink} smooth to="/#contact">Get in Touch</Nav.Link>
          <Nav.Link as={Link} to="/meet-the-team">Meet the Team</Nav.Link>
          <Nav.Link as={Link} to="/apprenticeship-info">What is an apprenticeship?</Nav.Link>
        </Nav>
        {isMobile ? (
          <Nav className="employee-login-sm">
            <Nav.Item className="mt-3">
              <Button as={Link} to="/employee-login" variant="outline-light" block>Employee Login</Button>
            </Nav.Item>
          </Nav>
        ) : (
          <div className="employee-login-lg">
            <Button as={Link} to="/employee-login" variant="outline-light">Employee Login</Button>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;