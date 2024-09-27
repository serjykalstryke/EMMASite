// src/components/SplashCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

import './SplashImage.css'

import splashImage from '../../assets/testbackground.jpg'

const SplashImage = () => (
  <Carousel controls={false} indicators={false}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={splashImage}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First Slide Title</h3>
        <p>Description for the first slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default SplashImage;
