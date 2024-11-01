// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

import './Footer.css'

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <p className="mb-0 text-center">
          &copy; {new Date().getFullYear()} Eli Madison Memorial Apprenticeship. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
