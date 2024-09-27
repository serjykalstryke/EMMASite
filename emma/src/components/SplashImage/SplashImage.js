// src/components/SplashImage.js
import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function SplashImage() {
  const jumbotronStyle = {
    backgroundImage: 'url(./assets/splash.jpg)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    height: '100vh',
    marginBottom: '0',
  };

  return (
    <Jumbotron fluid style={jumbotronStyle}>
      <Container className="d-flex h-100 align-items-center">
        <div>
          <h1>Welcome to Our Apprenticeship Program</h1>
          <p>Building the future of mainframe technology together.</p>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default SplashImage;
