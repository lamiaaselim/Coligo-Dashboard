// pages/Login.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm.tsx';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/dashboard'); // Redirect to home page after login
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className='p-5'>
            <Card.Body>
              <Card.Title className="text-center">Login</Card.Title>
              <LoginForm onLoginSuccess={handleLoginSuccess} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;