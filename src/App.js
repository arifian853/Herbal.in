import React from 'react';
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import { LoginPage } from './components/Login/LoginPage';
import { RegisterPage } from './components/Register/RegisterPage';
import { DashboardPage } from './components/Dashboard/DashboardPage';
import { Route, Routes } from 'react-router-dom';
import { SecureRoute } from './components/Protected/SecureRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { TermsAndServices } from './components/TermsAndService/TermsAndServices';
import { NotFound404 } from './components/NotFound404Page/NotFound404';

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />   
          <Route path="/terms" element={<TermsAndServices />} />
          <Route path="/dashboard" element={<SecureRoute><DashboardPage /></SecureRoute>} />
          <Route path="*" element={<NotFound404 />} />  
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
