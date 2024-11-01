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
              Whether you're interested in joining our apprenticeship program, working with us, or collaborating as a client, we'd love to hear from you!
            </Card.Text>

            <div className="contact-buttons mb-4">
              <Link to="https://docs.google.com/forms/d/1CvQQ_6F4heYkwLgml41Q6Wb4ewAHOnVJjw9NkXKGybI/viewform?ts=66e49f95&edit_requested=true">
                <Button variant="primary" size="lg" className="mb-2">
                  Aspiring Students
                </Button>
              </Link>
              <Link to="mailto:info@emma.foundation">
                <Button variant="primary" size="lg" className="mb-2">
                  Aspiring Employees & Volunteers
                </Button>
              </Link>
              <Link to="mailto:investors@emma.foundation">
                <Button variant="primary" size="lg" className="mb-2">
                  Interested Clients
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="contact-info mt-4">
              <p>
                <FontAwesomeIcon icon={faPhone} />{' '}
                <a href="tel:+1234567890">(123) 456-7890</a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="social-media mt-3">
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
