// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SplashImage from './components/SplashImage/SplashImage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import IntakeForm from './components/IntakeForm/IntakeForm';
import Footer from './components/Footer/Footer';

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
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/apply" element={<IntakeForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
