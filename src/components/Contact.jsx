import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'aos/dist/aos.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        const subject = `Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

        // Redirect to Gmail with pre-filled email
        window.location.href = `mailto:mubaraqgbolahan07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Optionally, reset the form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section id="contact" className="section bg-light" data-aos="fade-up">
            <Container>
                <h6 className="subtitle">Contact</h6>
                <h2 className="section-title mb-4">Get In Touch With Me</h2>
                <p className="mb-5 pb-4">Feel free to reach out to me for collaboration or any inquiries. I'll get back to you as soon as possible.</p>
                <Row>
                    <Col md={6} className="contact-info" data-aos="fade-right">
                        <h6 className="subtitle">Available 24/7</h6>
                        <h2 className="section-title mb-4">Contact Info</h2>
                        <p><strong>Email:</strong> mubaraqgbolahan07@gmail.com</p>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Enter your message"
                                    required
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="rounded w-100">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
