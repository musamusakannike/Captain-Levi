import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const About = () => (
  <section id="about" className="section mt-5 pt-5" data-aos="fade-up">
    <div className="text-center">
      <h5>About Me</h5>
      <h2>Who Am I?</h2>
    </div>
    <Container className="mt-5">
      <Row className="text-center text-md-left">
        <Col md={3} data-aos="fade-right">
          <Image src="assets/imgs/avatar.png" roundedCircle fluid />
        </Col>
        <Col
          md={9}
          className="ps-md-4"
          data-aos="fade-left"
          style={{ textAlign: "justify" }}
        >
          <h6 className="h1">Captain Levi</h6>
          <p className="">Web 3 Community Manager</p>
          <p>
            Experienced community manager with a passion for building and
            nurturing communities in the Web 3 space. Skilled in social media
            management, community engagement, and event planning.
          </p>
          <a
            href="/assets/imgs/cv.jpg"
            download="cv.jpg"
            className="btn btn-primary btn-lg rounded-pill"
          >
            Download CV
          </a>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
