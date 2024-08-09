import React from 'react';
// eslint-disable-next-line
import { Route, Navigate,Routes } from 'react-router-dom';
 
const ProtectedRoute = ({ element: Component, role }) => {
  const token = localStorage.getItem('access');
  const userRole = localStorage.getItem('role');
  console.log(token);
  console.log(userRole);
  return (
    <>
      {/* {...rest} */}
    {token && userRole === role ? <Component /> : <Navigate to="/login" />}
    
    {/* {token && <Component />} */}
    </>
  );
};
 
export default ProtectedRoute;