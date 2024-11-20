import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Components/login';
import Questions from './Components/questions';
import ChatScreen from './Components/chatScreen';

function App() {
  const navigate = useNavigate();

  const onLoginSuccess = () => {
    navigate('/questions');
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLoginSuccess={onLoginSuccess} />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/chatScreen" element={<ChatScreen />} />
    </Routes>
  );
}

export default App;