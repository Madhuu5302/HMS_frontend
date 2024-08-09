import React, { useState, useEffect } from 'react';
 
const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);
 
  useEffect(() => {
    // Fetch room data from an API or use hardcoded data
    // Example: fetch('/api/rooms').then(response => response.json()).then(data => setRooms(data));
    setRooms([
      { id: 1, type: 'Deluxe', status: 'Available' },
      { id: 2, type: 'Standard', status: 'Occupied' }
    ]);
  }, []);
 
  const handleAddRoom = () => {
    // Implement room addition logic
    alert('Adding a new room');
  };
 
  return (
<div>
<h3>Room Management</h3>
<button onClick={handleAddRoom}>Add Room</button>
<ul>
        {rooms.map(room => (
<li key={room.id}>
            Room Type: {room.type} - Status: {room.status}
</li>
        ))}
</ul>
</div>
  );
};
 
export default RoomManagement;