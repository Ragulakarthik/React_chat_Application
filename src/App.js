import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Components/login';

function Home() {
  return <h1>Welcome to the Home Screen</h1>;
}

function App() {
  const navigate = useNavigate();
  const onLoginSuccess = () => {
    navigate('/home'); // Use navigate to move to the Home screen
  };
  return (
    <Routes>
      <Route path="/" element={<Login onLoginSuccess={onLoginSuccess} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;