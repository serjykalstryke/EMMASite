// src/components/Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <Card className="text-center contact-card">
          <Card.Body>
            <FontAwesomeIcon icon={faPaperPlane} size="3x" className="mb-3 contact-icon" />
            <Card.Title className="mb-3">Get in Touch</Card.Title>
            <Card.Text className="mb-4">
              Interested in joining our apprenticeship program? We'd love to hear from you!
            </Card.Text>
            <Link to="/apply">
             <Button variant="primary" href="/apply" size="lg">
               Intake Form
              </Button>
            </Link>
            <div className="contact-info mt-4">
              <p>
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                <a href="mailto:info@mainframeapprenticeship.org">info@mainframeapprenticeship.org</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />{' '}
                <a href="tel:+1234567890">(123) 456-7890</a>
              </p>
            </div>
            <div className="social-media mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
