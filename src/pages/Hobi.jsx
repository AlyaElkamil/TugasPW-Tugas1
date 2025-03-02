import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Hobi = () => {
  return (
    <Container className="mt-5">
      <h2>Hobi</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://img.lovepik.com/free-png/20210919/lovepik-students-studying-painting-png-image_400512120_wh1200.png" />
            <Card.Body>
              <Card.Title>Menggambar</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://4.bp.blogspot.com/-t_cvT_soV1s/WhwIeyqv5aI/AAAAAAAAAOs/Bd6-XtduJRsGErkny28ziP80EISiqeqCACLcBGAs/s1600/membaca.JPG" />
            <Card.Body>
              <Card.Title>Membaca buku</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20230801/ourlarge/pngtree-cartoon-boy-listening-to-music-with-headphones-vector-png-image_6826377.png" />
            <Card.Body>
              <Card.Title>Mendengarkan Musik</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Hobi