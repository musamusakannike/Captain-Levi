import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => (
    <Navbar bg="light" expand="lg" fixed="top" className='vw-100'>
        <Container>
            <Navbar.Brand href="#home">
                <h4>Captain Levi</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#service">Services</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;
