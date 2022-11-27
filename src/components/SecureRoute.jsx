import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

export const SecureRoute = ({ children }) => {
    let { user } = useUserAuth();
    if (!user) {
       return <Navigate to ="/" /> 
    }
  return children;
};
