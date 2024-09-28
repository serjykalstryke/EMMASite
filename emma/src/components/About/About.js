// src/components/About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container id="about" className="my-5">
      <h2 className="text-center mb-4">Our Programs</h2>
      <Row>
        <Col md={4}>
          <Card className="about-card">
            <Card.Img variant="top" src="path_to_image1.jpg" alt="Section 1 Image" />
            <Card.Body>
              <Card.Title>Section 1</Card.Title>
              <Card.Text>
                It's dangerous to go alone! Take this. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc at justo sodales gravida.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="about-card">
            <Card.Img variant="top" src="path_to_image2.jpg" alt="Section 2 Image" />
            <Card.Body>
              <Card.Title>Section 2</Card.Title>
              <Card.Text>
                The flow of time is always cruel. Its speed seems different for each person, but no one can change it. Nulla facilisi. Donec vitae orci nec velit commodo accumsan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="about-card">
            <Card.Img variant="top" src="path_to_image3.jpg" alt="Section 3 Image" />
            <Card.Body>
              <Card.Title>Section 3</Card.Title>
              <Card.Text>
                Courage need not be remembered, for it is never forgotten. Fusce quis ante in nunc venenatis finibus. Sed in nulla at sapien varius gravida.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
