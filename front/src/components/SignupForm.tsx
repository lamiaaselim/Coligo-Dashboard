// components/SignupForm.tsx

import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { signupUser } from "../redux/authSlice.ts";
import { RootState } from "../redux/store.ts";
import { useAppDispatch } from "../hooks/useAppDispatch.ts";
import { useNavigate } from "react-router-dom";

interface SignupFormProps {
  onSignupSuccess: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const { error, loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    navigate("/login");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(signupUser(formData)).unwrap(); 
      onSignupSuccess(); 
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="username" className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />
      </Form.Group>
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
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="w-100"
        disabled={loading}
      >
        {loading ? "Signing up..." : "Signup"}
      </Button>

      <div className="text-center py-3">
        <p className="d-flex align-items-center justify-content-center">
          <small className="mx-2">You're already have an account? </small>
          <Button
            variant="link"
            onClick={handleNavigateToLogin}
            className="p-0"
          >
            Login here
          </Button>
        </p>
      </div>
    </Form>
  );
};

export default SignupForm;
