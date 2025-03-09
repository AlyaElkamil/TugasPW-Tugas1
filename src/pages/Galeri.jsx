import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import photo2 from '../assets/images/photo2.jpg';

const Galeri = () => {
  return (
    <Container className="mt-5">
      <h2>Galeri</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://1.bp.blogspot.com/-1cs1In0eRUE/WgePNIOPmaI/AAAAAAAAApc/DbB-0tvidcMGOGFmKZwigDHPySPb9-u5QCEwYBhgL/s1600/22853167_1984458391837153_1342975386541006899_n.jpg" />
            <Card.Body>
              <Card.Title>Kucing</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
          <Card.Img variant="top" src={photo2} />
            <Card.Body>
              <Card.Title>Myself</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://hariannusantara.com/wp-content/uploads/2019/06/gambar-pemandangan-alam-hd9.jpg" />
            <Card.Body>
              <Card.Title>Pemandangan</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://img.webtech360.com/imagesupdate1/image-webtech360-com-2759344.jpg" />
            <Card.Body>
              <Card.Title>Rubah</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://c.pxhere.com/images/74/26/7c536d7b7943034a05ac75049fa8-1421261.jpg!d" />
            <Card.Body>
              <Card.Title>Daun Maple</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Galeri