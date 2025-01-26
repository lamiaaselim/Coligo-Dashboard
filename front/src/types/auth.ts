// types/auth.ts
export interface User {
  id: string;
  username: string;
  email: string;
  // Add other user properties as needed
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  username: string;
  email: string;
  password: string;
}