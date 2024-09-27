// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import SplashImage from './components/SplashImage/SplashImage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css'


function App() {
  return (
    <>
      <Header />
      <SplashImage />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
