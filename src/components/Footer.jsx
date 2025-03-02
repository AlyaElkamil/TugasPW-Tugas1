import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
        <Navbar bg="light" variant="light" className="fixed-bottom">
      <Container className="d-flex justify-content-center">
        <Navbar.Text>
        Copyright&copy; 2025. Alya Elkamil's Web. All Rights reserved
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}
export default Footer;