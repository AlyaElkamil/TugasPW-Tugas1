import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const Advice = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setAlertMessage('Harap tulis nama dengan benar.'); 
      setShowAlert(true);
      return;
    }

    if (!validateEmail(email)) {
      setAlertMessage('Harap tulis alamat Email dengan benar.');
      setShowAlert(true);
      return;
    }

    if (!feedback.trim()) {
      setAlertMessage('Harap tuliskan sara dan masukkan.');
      setShowAlert(true);
      return;
    }

    setAlertMessage(`Terima kasih, ${name}, atas saran dan masukan!`);
    setShowAlert(true);
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <Container className="mt-5">
      <h2>Saran dan Masukan</h2>
      {showAlert && (
        <Alert
          variant={alertMessage.includes('Thank you') ? 'success' : 'danger'}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formFeedback" className="mb-3">
          <Form.Label>Saran atau Masukan</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="asdfghjklqwertyuiopzxcvbnm"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Advice;