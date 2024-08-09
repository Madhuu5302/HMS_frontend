import React, { useState, useEffect } from 'react';
 
const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
 
  useEffect(() => {
    // Fetch booking data from an API or use hardcoded data
    // Example: fetch('/api/bookings').then(response => response.json()).then(data => setBookings(data));
    setBookings([
      { id: 1, guestName: 'John Doe', roomType: 'Deluxe', status: 'Checked-in' },
      { id: 2, guestName: 'Jane Smith', roomType: 'Standard', status: 'Checked-out' }
    ]);
  }, []);
 
  const handleAddBooking = () => {
    // Implement booking addition logic
    alert('Adding a new booking');
  };
 
  return (
<div>
<h3>Booking Management</h3>
<button onClick={handleAddBooking}>Add Booking</button>
<ul>
        {bookings.map(booking => (
<li key={booking.id}>
            Guest: {booking.guestName} - Room Type: {booking.roomType} - Status: {booking.status}
</li>
        ))}
</ul>
</div>
  );
};
 
export default BookingManagement;

