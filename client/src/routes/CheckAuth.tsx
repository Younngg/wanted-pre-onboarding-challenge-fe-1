import React from 'react';
import { Navigate } from 'react-router-dom';

const CheckAuth = ({ children }: { children: JSX.Element }) => {
  const pathname = window.location.pathname;

  const token = localStorage.getItem('token');

  if (!token && pathname === '/') {
    return <Navigate to='/auth' />;
  }

  if ((pathname === '/auth' || pathname === '/auth/register') && token) {
    return <Navigate to='/' />;
  }

  return children;
};

export default CheckAuth;
