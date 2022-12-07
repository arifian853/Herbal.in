import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';

export const AdminRoute = ({ children }) => {
    let { admin } = useAdminAuth();
    if (!admin) {
       return <Navigate to ="/" /> 
    }
  return children;
};
