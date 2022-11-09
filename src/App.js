import React from 'react';
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import { LoginPage } from './components/Login/LoginPage';
import { RegisterPage } from './components/Register/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { TermsAndServices } from './components/TermsAndService/TermsAndServices';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />   
        <Route path="/terms" element={<TermsAndServices />} />  
      </Routes>
    </div>
  );
}

export default App;
