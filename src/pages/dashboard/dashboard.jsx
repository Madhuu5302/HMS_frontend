import React from 'react';
import { useState } from 'react';
// import Reports from '../../Reports';
import BookingManagement from '../BookingManagement';
import RoomManagement from '../../RoomManagement';
 
function Dashboard() {
  // State to keep track of the current view
  const [view, setView] = useState('');
 
  const handleViewChange = (viewName) => {
    setView(viewName);
  };
 
  return (
<div>
<p>Welcome to the Admin Dashboard</p>
<h2>Hotel Owner</h2>
<div>
<button onClick={() => handleViewChange('rooms')}>Manage Hotels</button>
<button onClick={() => handleViewChange('bookings')}> Manage Rooms</button>
<button onClick={() => handleViewChange('reports')}>Manage Bookings</button>
</div>
 
      {/* Conditional Rendering Based on State */}
      {view === 'rooms' && <RoomManagement />}
      {view === 'bookings' && <BookingManagement />}
      {/* {view === 'reports' && <Reports />} */}
</div>
  );
}
 
export default Dashboard;