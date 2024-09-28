// src/components/IntakeForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './IntakeForm.css';
// Uncomment the line below when the backend is set up
// import axios from 'axios';

function IntakeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validate = () => {
    let validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email address is invalid';
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Please provide a message';
    }
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      // Send formData to the server (uncomment when backend is ready)
      /*
      axios
        .post('http://localhost:5000/api/submit-form', formData)
        .then((response) => {
          console.log('Server response:', response.data);
          // Handle success (e.g., display a success message)
        })
        .catch((error) => {
          console.error('There was an error submitting the form:', error);
          // Handle error (e.g., display an error message)
        });
      */

      // For now, just log the formData
      console.log('Form submitted successfully:', formData);

      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <Container className="intake-form">
      <h2 className="text-center my-4">Apply Now</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name Field */}
        <Form.Group controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        {/* Email Field */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        {/* Phone Field */}
        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        {/* Message Field */}
        <Form.Group controlId="formMessage">
          <Form.Label>Why are you interested in this apprenticeship?</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" block>
          Submit Application
        </Button>
      </Form>
    </Container>
  );
}

export default IntakeForm;
