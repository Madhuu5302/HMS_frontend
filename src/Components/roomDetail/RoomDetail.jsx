import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './roomDetail.css';

function RoomDetail({ hotelId }) {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/hotels/${hotelId}/rooms`)
            .then(response => {
                setRooms(response.data);
            })
            .catch(error => {
                console.error('Error fetching rooms:', error);
            });
    }, [hotelId]); 

    const isAuthenticated = () => {
        
        return localStorage.getItem('token') !== null;
    };


    return (
        <div>
            <h2>Available Rooms</h2>
            <div className="room-cards">
                {rooms.map(room => (
                    <div className="room-card" key={room.id}>
                        <h3>{room.room_type}</h3>
                        <p>{room.number_of_rooms} available</p>
                         {isAuthenticated() ? (
                            <Link to={`/booking/${hotelId}/${room.room_type}`}>Book now</Link>
                        ) : (
                            <p>Please <Link to="/login">login</Link> to book</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RoomDetail;