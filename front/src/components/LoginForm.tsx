// components/LoginForm.tsx
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { loginUser } from '../redux/authSlice.ts';
import { RootState } from '../redux/store.ts';
import { useAppDispatch } from '../hooks/useAppDispatch.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useAppDispatch();
  const { error, loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(formData)).unwrap(); 
      onLoginSuccess(); 
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const handleNavigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>

        {/* Add a link or button to navigate to the signup page */}
        <div className="text-center">
          <p className="d-flex align-items-center justify-content-center">
            <small className="mx-2">Don't have an account? </small>
            <Button variant="link" onClick={handleNavigateToSignup} className="p-0">
              Sign up here
            </Button>
          </p>
        </div>
      </Form>

      {/* Add ToastContainer to display toasts */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default LoginForm;