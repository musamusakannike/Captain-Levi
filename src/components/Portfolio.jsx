import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'aos/dist/aos.css';

const portfolioItems = [
    {
        title: "Community Management for DAO",
        description: "Managed a decentralized autonomous organization's community, growing it by 150% in 6 months.",
        image: "assets/imgs/folio-1.jpg",
    },
    {
        title: "Social Media Strategy",
        description: "Developed and executed a social media strategy for a Web 3 project, leading to a 200% increase in engagement.",
        image: "assets/imgs/folio-2.jpg",
    },
    {
        title: "Web 3 Event Planning",
        description: "Organized and managed a series of virtual events in the Web 3 space, attracting over 10,000 attendees.",
        image: "assets/imgs/folio-3.jpg",
    },
    {
        title: "Analytics & Reporting",
        description: "Provided detailed analytics and reporting for community engagement across multiple Web 3 platforms.",
        image: "assets/imgs/folio-4.jpg",
    },
];

const Portfolio = () => (
    <section id="portfolio" className="section" data-aos="fade-up">
        <Container>
            <h6 className="h2 text-center">Portfolio</h6>
            <h2 className="text-center mb-4">Check My Wonderful Works</h2>
            <p className="text-center mb-5 pb-4">
                A showcase of the projects and initiatives I've successfully managed and executed in the Web 3 space.
            </p>
            <Row className='justify-content-center'>
                {portfolioItems.map((item, index) => (
                    <Col md={6} lg={4} className="mb-4" key={index} data-aos="zoom-in">
                        <Card className="portfolio-card border-0 shadow-sm">
                            <AwesomeSlider animation="cubeAnimation" organicArrows={false}>
                                <div data-src={item.image}></div>
                            </AwesomeSlider>
                            <Card.Body className="text-center">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Portfolio;
