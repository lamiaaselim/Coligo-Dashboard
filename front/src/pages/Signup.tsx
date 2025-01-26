// pages/Signup.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SignupForm from './../components/SignupForm.tsx';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignupSuccess = () => {
    navigate('/login'); // Redirect to login page after signup
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card  className='p-5'>
            <Card.Body>
              <Card.Title className="text-center">Signup</Card.Title>
              <SignupForm onSignupSuccess={handleSignupSuccess} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;