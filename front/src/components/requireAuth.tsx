// components/requireAuth.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';

const requireAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const { user } = useSelector((state: RootState) => state.auth);

    return user ? <Component {...props} /> : <Navigate to="/" replace />;
  };

  return AuthenticatedComponent;
};

export default requireAuth;