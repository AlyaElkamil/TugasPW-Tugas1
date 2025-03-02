import React from 'react';
import {Container, ListGroup} from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container className="mt-5 text-start">
      <h2>Tentang Saya</h2>
      <ListGroup>
        <ListGroup.Item>Nama: Alya Elkamil</ListGroup.Item>
        <ListGroup.Item>Tempat/Tanggal Lahir: Pekanbaru, 09 Mei 2005</ListGroup.Item>
        <ListGroup.Item>Alamat: Perum. Pandau Permai Jalan Kedondong 7 C6 no. 28</ListGroup.Item>
        <ListGroup.Item>Nama Perguruan: Universitas Islam Negeri Sultan Syarif Kasim Riau</ListGroup.Item>
        <ListGroup.Item>Status: Mahasiswa</ListGroup.Item>
        <ListGroup.Item>Fakultas: Sains dan Teknologi</ListGroup.Item>
        <ListGroup.Item>Prodi: Teknik Informatika</ListGroup.Item>
        <ListGroup.Item>NIM: 12350120981</ListGroup.Item>
      </ListGroup>
    </Container>
  )
}
export default AboutMe;