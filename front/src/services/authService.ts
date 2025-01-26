// services/authService.ts
import axios from 'axios';
import { LoginFormData, SignupFormData } from '../types/auth';

const API_URL = 'http://localhost:8083/api/user'; // Replace with your backend URL

export const login = async (data: LoginFormData) => {
  const response = await axios.post(`${API_URL}/login`, data, { withCredentials: true });
  return response.data;
};

export const signup = async (data: SignupFormData) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};