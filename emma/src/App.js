// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SplashImage from './components/SplashImage/SplashImage';
import About from './components/About/About';
import Mission from './components/Mission/Mission';
import Vision from './components/Vision/Vision';
import Contact from './components/Contact/Contact';
import EventList from './components/EventList/EventList';
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
            
              {/* Info Grid Section with unified styling */}
              <section className="info-grid-section">
                <div className="info-grid-container">
                  <EventList />

                  {/* Info Grid Title */}
                  <h2 className="info-grid-title">Our Mission and Vision</h2>
                  
                  {/* Info Grid */}
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

               
                    <Contact />
               
                </div>
              </section>
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
