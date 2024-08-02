import React, { useState, useEffect } from 'react';
import './bookingList.css';


// eslint-disable-next-line 
const fetchRoomDetails = async (roomId) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/rooms/${roomId}/`);
    const data = await response.json();
    console.log('Room Details:', data); // Add this line
    return data;
  } catch (error) {
    console.error('Error fetching room details:', error);
    return null;
  }
};

const cancelBooking = async (bookingId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://127.0.0.1:8000/api/bookings/${bookingId}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      return true; // Booking cancelled successfully
    } else {
      const errorData = await response.json();
      throw new Error(errorData.detail);
    }
  } catch (error) {
    console.error('Error cancelling booking:', error);
    return false; // Cancellation failed
  }
};

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    const cancelled = await cancelBooking(bookingId);
    if (cancelled) {
      // Update UI after successful cancellation
      fetchBookings(); // Refresh bookings
      alert('Booking cancelled successfully.'); // Show pop-up
    } else {
      alert('Failed to cancel booking. Please try again later.');
    }
  };

  return (
  
    <div>
      <h1>Your bookings are listed here</h1>
      <div className="card-container">
        {Array.isArray(bookings) && bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={booking.id || index} className="card">
              <h2>Booking ID: {booking.id}</h2>
              <p><strong>Check-in:</strong> {booking.check_in_date}</p>
              <p><strong>Check-out:</strong> {booking.check_out_date}</p>
              <p><strong>Total fare:</strong> {booking.total_fare}</p>
              <p><strong>Number of Guest:</strong> {booking.numOfGuest}</p>
             
              <button className="card-button" onClick={() => handleCancelBooking(booking.id)}>Cancel Booking</button>
             
            </div>
          ))
        ) : (
          <p>No bookings available</p>
        )}
      </div>
    </div>
     
  );
};

export default BookingsList;