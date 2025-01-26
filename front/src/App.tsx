// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import Dashboard from './pages/Dashboard.tsx';
import requireAuth from './components/requireAuth.tsx';
import QuizDetails from './components/QuizDetails.tsx';
import Layout from './pages/Layout.tsx';
import { useDispatch } from 'react-redux';
import { loadUserFromStorage } from './redux/authSlice.ts';
import './styles/App.css';

const ProtectedDashboard = requireAuth(Dashboard);

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage()); // Load user from local storage
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz/:id" element={<QuizDetails />} />
          <Route path="/dashboard" element={<ProtectedDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;