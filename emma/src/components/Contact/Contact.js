// src/components/Contact.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container id="contact" className="my-5">
      <Row>
        <Col>
          <h2>Get in Touch</h2>
          <p>If you're interested in our program, we'd love to hear from you!</p>
          <Button variant="primary" href="mailto:info@mainframeapprenticeship.org">
            Email Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
