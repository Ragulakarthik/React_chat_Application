import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Components/login';
import Questions from './Components/questions';

function App() {
  const navigate = useNavigate();
  const onLoginSuccess = () => {
    navigate('/questions'); // Use navigate to move to the Home screen
  };
  return (
    <Routes>
      <Route path="/" element={<Login onLoginSuccess={onLoginSuccess} />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
}
export default App;