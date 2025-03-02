import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navibar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">AlyaEl's Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
          <Nav.Link as={Link} to="/hobi">Hobbies</Nav.Link>
          <Nav.Link as={Link} to="/sertifikasi">Certificates</Nav.Link>
          <Nav.Link as={Link} to="/galeri">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/advice">Advice</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navibar;