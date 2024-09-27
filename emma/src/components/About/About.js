// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container id="about" className="my-5">
      <Row>
        <Col>
          <h2>About Our Program</h2>
          <p>
            Our apprenticeship program focuses on mainframe technologies, providing hands-on experience
            and mentorship to aspiring professionals.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
