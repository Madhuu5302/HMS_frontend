// HotelOwnerDashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const HotelOwnerDashboard = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('role');
    navigate('/login');
  };
 
  return(   
     <div>
      <h1>Hotel Owner Dashboard</h1>
      <button onClick={handleLogout}>Logout</button><div>
      <button onClick={()=> navigate('/manage-hotels')}>Manage Hotels</button>
      <button onClick={()=> navigate('/view-bookings')}>View Bookings</button>
      <button onClick={()=> navigate('/manage-rooms')}>Manage Rooms</button>
      <button onClick={()=> navigate('/view-reviews')}>View Reviews</button>
      <button onClick={()=> navigate('/reports')}>Reports</button></div></div> );
 };

 
export default HotelOwnerDashboard;