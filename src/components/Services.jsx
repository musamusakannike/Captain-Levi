import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser, faBullhorn, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Services = () => (
    <section id="service" className="section" data-aos="fade-up">
        <Container className="text-center">
            <h6 className="h4 text-center">Services</h6>
            <h2 className="section-title text-center mb-4">What I Offer</h2>
            <p className="mb-5 pb-4 text-center">Building and maintaining vibrant communities in the Web 3 ecosystem.</p>
            <Row>
                <Col sm={6} md={3} data-aos="flip-left">
                    <Card className="border h-100 py-4">
                        <Card.Body>
                            <FontAwesomeIcon icon={faComments} className="icon" />
                            <h5>Community Management</h5>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={3} data-aos="flip-right">
                    <Card className="border h-100 py-4">
                        <Card.Body>
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            <h5>Social Media Strategy</h5>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={3} data-aos="flip-left">
                    <Card className="border h-100 py-4">
                        <Card.Body>
                            <FontAwesomeIcon icon={faBullhorn} className="icon" />
                            <h5>Event Planning</h5>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={3} data-aos="flip-right">
                    <Card className="border h-100 py-4">
                        <Card.Body>
                            <FontAwesomeIcon icon={faChartBar} className="icon" />
                            <h5>Analytics & Reporting</h5>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Services;
