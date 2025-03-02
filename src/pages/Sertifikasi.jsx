import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Sertifikasi = () => {
  return (
    <Container className="mt-5 text-start">
      <h2>Sertifikasi</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Jenjang</th>
            <th>Prestasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SD</td>
            <td>-</td>
          </tr>
          <tr>
            <td>MTS</td>
            <td>-</td>
          </tr>
          <tr>
            <td>SMK</td>
            <td>
            <li>Peserta Kegiatan Workshop Produksi Film dan Pengambilan Gambar</li>
            <li>Peserta dalam Kegiatan Magang Riau Televisi di Divisi Program, Marketing, dan Studio</li>
            </td>
          </tr>
          <tr>
            <td>Kuliah</td>
            <td>
            <li>Peserta Seminar Internasional "Motivation & Enterpreneurship"</li>
            <li>Peserta Seminar Nasional "Muda Berkarya di Era Digital"</li>
            <li>Peserta alisi.usr Talkshow "#OneNightWithAlisi: Ghibahin Hacker"</li>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Sertifikasi;