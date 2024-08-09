// AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const AdminDashboard = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('role');
    navigate('/login');
  };
 
  return (
        <div>
        <h1>Admin Dashboard</h1>
        
         <button onClick={handleLogout}>Logout</button>
         {/* Add more admin-specific functionality here */}
         </div>
  );
};
 
export default AdminDashboard;