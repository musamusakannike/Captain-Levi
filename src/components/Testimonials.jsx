import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const testimonials = [
    {
        name: "Erwin Smith",
        position: "Project Manager, Paradigm Labs",
        feedback: "Captain Levi is a fantastic community manager. His ability to engage with our community and drive meaningful conversations has significantly boosted our project's visibility.",
        avatar: "assets/imgs/avatar-1.jpg",
    },
    {
        name: "Mikasa Ackerman",
        position: "Marketing Lead, Web3Net",
        feedback: "Levi's strategies for social media management are unparalleled. His work has led to a substantial increase in our online presence and follower engagement.",
        avatar: "assets/imgs/avatar-2.jpg",
    },
    {
        name: "Armin Arlert",
        position: "CTO, BlockChainDev",
        feedback: "Levi's insights into community dynamics in the Web 3 space are invaluable. His ability to connect with our audience has been key to our project's success.",
        avatar: "assets/imgs/avatar-3.jpg",
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section id="testimonials" className="section" data-aos="fade-up">
            <Container>
                <h6 className="h4 text-center">Testimonials</h6>
                <h2 className="text-center mb-4">What People Say About Me</h2>
                <p className="text-center mb-5 pb-4">Hear from some of the key people I've worked with during my journey in the Web 3 space.</p>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <Card className="testimonial-card border-0 shadow-sm mb-4" key={index}>
                                    <Card.Body className="text-center">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="rounded-circle mb-3" style={{ width: 80, height: 80 }} />
                                        <Card.Text className="mb-4">{testimonial.feedback}</Card.Text>
                                        <Card.Title as="h5">{testimonial.name}</Card.Title>
                                        <Card.Subtitle className="text-muted">{testimonial.position}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
