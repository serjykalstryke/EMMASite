// src/components/SplashCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './SplashImage.css';
import splashImage from '../../assets/testbackground.webp';

const SplashImage = () => (
  <Carousel controls={false} indicators={false}>
    <Carousel.Item>
      <img className="d-block w-100" src={splashImage} alt="First slide" />
      <Carousel.Caption className="custom-caption neon-glow-text">  
       <h3 className="electric-blue-text">Eli Madison Memorial Apprenticeship</h3>
       <p className="electric-blue-text">Bridging the talent gap in Mainframe</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default SplashImage;
