// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SplashImage from './components/SplashImage/SplashImage';
import About from './components/About/About';
import Mission from './components/Mission/Mission';
import Vision from './components/Vision/Vision';
import EventList from './components/EventList/EventList'; // Import EventList component
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SplashImage />
              <div className="info-grid-container">
                <div className="flex-container">
                  <EventList />
                </div>
             
                <div className="info-grid">
                  <div className="section-box">
                    <About />
                  </div>
                  <div className="section-box">
                    <Mission />
                  </div>
                  <div className="section-box">
                    <Vision />
                  </div>
                </div>

              <div className="flex-container">
                <Contact />
              </div>
            </div>
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
