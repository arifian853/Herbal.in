import React from 'react';
import { useUserAuth } from '../../context/UserAuthContext';

export const DashboardPage = () => {
  const { user } = useUserAuth();
  return (
    <div className="terms">
        <h1>Hello , {user && user.email}</h1>
    </div>
  )
}
