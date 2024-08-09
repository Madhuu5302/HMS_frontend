import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ManageHotel.css";

const ManageHotels = () => {
  const [hotelData, setHotelData] = useState({
    name: '',
    type: '',
    city: '',
    address: '',
    distance: '',
    photos: [],
    title: '',
    desc: '',
    rating: 0,
    rooms: [],
    cheapestPrice: '',
    featured: false,
  });
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 
  useEffect(() => {
    fetchHotels();
  }, []);
 
  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/hotels/');
      setHotels(response.data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHotelData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
 
  const handleAddHotel = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/hotels/', hotelData);
      setSuccess('Hotel added successfully');
      resetForm();
      fetchHotels();
    } catch (error) {
      console.error('Error adding hotel:', error);
      setError('Failed to add hotel. Please check the server logs for more details.');
    }
  };
 
  const handleUpdateHotel = async () => {
    if (selectedHotelId === null) return;
    try {
      await axios.put(`http://127.0.0.1:8000/api/hotels/${selectedHotelId}/`, hotelData);
      setSuccess('Hotel updated successfully');
      resetForm();
      fetchHotels();
    } catch (error) {
      console.error('Error updating hotel:', error);
      setError('Failed to update hotel. Please check the server logs for more details.');
    }
  };
 
  const handleDeleteHotel = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/hotels/${id}/`);
      setSuccess('Hotel deleted successfully');
      fetchHotels();
    } catch (error) {
      console.error('Error deleting hotel:', error);
      setError('Failed to delete hotel. Please check the server logs for more details.');
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedHotelId === null) {
      handleAddHotel();
    } else {
      handleUpdateHotel();
    }
  };
 
  const handleEditClick = (hotel) => {
    setHotelData(hotel);
    setSelectedHotelId(hotel.id);
  };
 
  const resetForm = () => {
    setHotelData({
      name: '',
      type: '',
      city: '',
      address: '',
      distance: '',
      photos: [],
      title: '',
      desc: '',
      rating: 0,
      rooms: [],
      cheapestPrice: '',
      featured: false,
    });
    setSelectedHotelId(null);
    setError('');
    setSuccess('');
  };
 
  return (
<div>
<h1>Manage Hotels</h1>
<form onSubmit={handleSubmit}>
<input
          type="text"
          name="name"
          placeholder="Hotel Name"
          value={hotelData.name}
          onChange={handleChange}
        />
<input
          type="text"
          name="type"
          placeholder="Hotel Type"
          value={hotelData.type}
          onChange={handleChange}
        />
<input
          type="text"
          name="city"
          placeholder="City"
          value={hotelData.city}
          onChange={handleChange}
        />
<input
          type="text"
          name="address"
          placeholder="Address"
          value={hotelData.address}
          onChange={handleChange}
        />
<input
          type="text"
          name="distance"
          placeholder="Distance"
          value={hotelData.distance}
          onChange={handleChange}
        />
<input
          type="text"
          name="photos"
          placeholder="Photos (JSON)"
          value={hotelData.photos}
          onChange={handleChange}
        />
<input
          type="text"
          name="title"
          placeholder="Title"
          value={hotelData.title}
          onChange={handleChange}
        />
<textarea
          name="desc"
          placeholder="Description"
          value={hotelData.desc}
          onChange={handleChange}
></textarea>
<input
          type="number"
          name="rating"
          placeholder="Rating"
          value={hotelData.rating}
          onChange={handleChange}
        />
<input
          type="text"
          name="rooms"
          placeholder="Rooms (JSON)"
          value={hotelData.rooms}
          onChange={handleChange}
        />
<input
          type="number"
          name="cheapestPrice"
          placeholder="Cheapest Price"
          value={hotelData.cheapestPrice}
          onChange={handleChange}
        />
<label>
          Featured:
<input
            type="checkbox"
            name="featured"
            checked={hotelData.featured}
            onChange={handleChange}
          />
</label>
<button type="submit">
          {selectedHotelId === null ? 'Add Hotel' : 'Update Hotel'}
</button>
        {selectedHotelId !== null && (
<button
            type="button"
            className="delete-button"
            onClick={() => handleDeleteHotel(selectedHotelId)}
>
            Delete Hotel
</button>
        )}
</form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
<h2>Existing Hotels</h2>
<ul>
        {hotels.map((hotel) => (
<li key={hotel.id}>
<span>{hotel.name} - {hotel.city}</span>
<button onClick={() => handleEditClick(hotel)}>Edit</button>
</li>
        ))}
</ul>
</div>
  );
};
 
export default ManageHotels;