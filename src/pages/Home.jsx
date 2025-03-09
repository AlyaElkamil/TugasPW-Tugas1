import React from 'react';
import {Container, Row, Col, Card, Image} from 'react-bootstrap';
import profilImage from '../assets/images/photo1 (3).jpg';
import '../App.css';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card.Img
            variant="top"
            src={profilImage}
            alt="Foto Profil"
            fluid
            />
            </Col>
            
          <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Profil Singkat</Card.Title>
              <Card.Text>
              Assalamualaikum semua. Perkenalkan, saya Alya Elkamil. Saya merupakan mahasiswa semester 4 di Universitas Islam Negeri Sultan Syarif Kasim Riau.
              </Card.Text>
              <Card.Text>
              "Kegagalan adalah kesuksesan yang tertunda"
              </Card.Text>

              <Card.Text className="mt-3">
                <strong>Jika ingin berkenalan lebih lanjut:</strong>
              </Card.Text>
              <Row className="mt-2">
                <Col xs={3} md={2}>
                  <a href="https://www.instagram.com/alyaelkamil09/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://1.bp.blogspot.com/-8b7x7Wxuj7E/XydfS2aLU-I/AAAAAAAAAGs/T4CS_zEbORQqgyIZHIWPqNlOh6R76MEJQCLcBGAsYHQ/s2048/logo%2Binstagram%2Byogiancreative.png"
                      alt="Instagram"
                      fluid
                      style={{ width: '40px', height: '40px' }}
                    />
                  </a>
                </Col>

                <Col xs={3} md={2}>
                  <a href="https://web.telegram.org/k/#-2024671115" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://imagepng.org/wp-content/uploads/2017/11/telegram-icone-icon.png"
                      alt="Telegram"
                      fluid
                      style={{ width: '40px', height: '40px' }}
                    />
                  </a>
                </Col>
                </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;