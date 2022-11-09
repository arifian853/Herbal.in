import React from 'react';
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import { LoginPage } from './components/Login/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />    
      </Routes>
    </div>
  );
}

export default App;
