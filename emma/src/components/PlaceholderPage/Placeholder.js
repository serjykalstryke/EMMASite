// src/components/PlaceholderPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Placeholder.css';

const PlaceholderPage = () => {
  return (
    <div className="placeholder-page">
      <h1 className="placeholder-title">Content Coming Soon!</h1>
      <p className="placeholder-text">
        We are currently working hard to bring you this content. Stay tuned!
      </p>
      <Link to="/" className="placeholder-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PlaceholderPage;
