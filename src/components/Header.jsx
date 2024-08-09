import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header className="header" id="home" data-aos="fade-down" style={{marginTop: "100px"}}>
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="mx-auto w-100">
        <Row className="align-items-center">
          <Col md={6} className="ps-2 ps-md-4 ps-lg-5 ">
            <h6 className="h1 pt-5 mt-5 pt-lg-2 mt-lg-2">Hello, I'm</h6>
            <h2 className="display-1 fw-bolder">Captain Levi</h2>
            <p>Web 3 Community Manager</p>
            <div className="buttons pt-3">
              <a href="#contact"><Button variant="primary" size="lg" className="rounded me-2">
                HIRE ME
              </Button></a>
              <Button variant="dark" size="lg" className="rounded">
                DOWNLOAD CV
              </Button>
            </div>
            <div className="socials mt-4">
              <a className="social-item me-2 border-primary" href="#">
                <FontAwesomeIcon icon={faLinkedin} className="text-primary" />
              </a>
              <a className="social-item me-2 border-primary" href="#">
                <FontAwesomeIcon icon={faTwitter} className="text-primary" />
              </a>
              <a className="social-item border-primary" href="#">
                <FontAwesomeIcon icon={faTelegram} className="text-primary" />
              </a>
            </div>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src="assets/imgs/man.png"
              alt="Captain Levi"
              className="img-fluid w-100 h-auto"
            />
          </Col>
        </Row>
      </div>
    </Container>
  </header>
);

export default Header;
