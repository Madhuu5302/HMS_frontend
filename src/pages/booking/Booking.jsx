import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './booking.css';
import axios from 'axios';

function BookingPage() {
    const navigate = useNavigate();
    const { hotelId, roomType } = useParams();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        checkInDate: '',
        checkOutDate: '',
        numOfGuest: 1,
        roomPk: null,
        baseFare: 0,
        totalFare: 0,
        bookingSuccess: false
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        async function fetchRoomDetails() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/hotels/${hotelId}/rooms/`);
                const rooms = response.data;
                const selectedRoom = rooms.find(room => room.room_type === roomType);
                if (selectedRoom) {
                    setFormData(prevState => ({
                        ...prevState,
                        roomPk: selectedRoom.id,
                        baseFare: selectedRoom.baseFare
                    }));
                }
            } catch (error) {
                console.error('Error fetching room details:', error);
            }
        }

        fetchRoomDetails();
    }, [hotelId, roomType]);

    useEffect(() => {
        const calculateTotal = () => {
            if (formData.checkInDate && formData.checkOutDate) {
                const formattedCheckInDate = new Date(formData.checkInDate);
                const formattedCheckOutDate = new Date(formData.checkOutDate);

                if (formattedCheckOutDate <= formattedCheckInDate) {
                    return 0;
                }

                const nights = Math.ceil((formattedCheckOutDate - formattedCheckInDate) / (1000 * 60 * 60 * 24));

                let extraCharge = 0;
                if (roomType === 'Single' && formData.numOfGuest > 2) {
                    extraCharge = (formData.numOfGuest - 2) * 0.4 * formData.baseFare;
                } else if (roomType === 'Double' && formData.numOfGuest > 4) {
                    extraCharge = (formData.numOfGuest - 4) * 0.4 * formData.baseFare;
                } else if (roomType === 'King' && formData.numOfGuest > 6) {
                    extraCharge = (formData.numOfGuest - 6) * 0.4 * formData.baseFare;
                }
                console.log(`Base Fare: ${formData.baseFare}`);
                console.log(`Extra Charge: ${extraCharge}`);
                console.log(`Number of Nights: ${nights}`);
                return nights * (formData.baseFare + extraCharge);
            }
            return 0;
        };

        const totalFare = calculateTotal();
        console.log(`Calculated Total Fare: ${totalFare}`);
        
        setFormData(prevState => ({
            ...prevState,
            totalFare: totalFare
        }));
    }, [formData.checkInDate, formData.checkOutDate, formData.baseFare, formData.numOfGuest, roomType]);

    useEffect(() => {
        if (showSuccessMessage) {
            const timeout = setTimeout(() => {
                setShowSuccessMessage(false);
                navigate('/');
            }, 5000); 
            return () => clearTimeout(timeout);
        }
    }, [showSuccessMessage, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        setFormErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/bookings/', {
                    hotelId: hotelId,
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    check_in_date: formData.checkInDate,
                    check_out_date: formData.checkOutDate,
                    numOfGuest: formData.numOfGuest,
                    room: formData.roomPk,
                    total_fare: formData.totalFare
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.status === 201) {
                    setShowSuccessMessage(true);
                }
            } catch (error) {
                console.error('Error booking:', error);
            }
        }
    };

    const handleClosePopup = () => {
        setShowSuccessMessage(false);
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;
    
        if (!formData.fullName) {
            formIsValid = false;
            errors.fullName = 'Please enter your full name';
        }
    
        if (!formData.email) {
            formIsValid = false;
            errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            errors.email = 'Please enter a valid email address';
        }
    
        if (!formData.phone) {
            formIsValid = false;
            errors.phone = 'Please enter your phone number';
        } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(formData.phone)) {
            formIsValid = false;
            errors.phone = 'Please enter a valid phone number (e.g., 123-456-7890)';
        }
    
        if (!formData.checkInDate) {
            formIsValid = false;
            errors.checkInDate = 'Please select check-in date';
        }
    
        if (!formData.checkOutDate) {
            formIsValid = false;
            errors.checkOutDate = 'Please select check-out date';
        } else {
            const checkInDate = new Date(formData.checkInDate);
            const checkOutDate = new Date(formData.checkOutDate);
            if (checkOutDate <= checkInDate) {
                formIsValid = false;
                errors.checkOutDate = 'Check-out date must be greater than check-in date';
            }
        }
    
        setFormErrors(errors);
        return formIsValid;
    };
    
    return (
        <div className='booking-container'>
            <h2>Booking Details</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    <span className="error-message">{formErrors.fullName}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    <span className="error-message">{formErrors.email}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.phone} onChange={handleChange} required />
                    <span className="error-message">{formErrors.phone}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="checkInDate">Check-in Date:</label>
                    <input type="date" id="checkInDate" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
                    <span className="error-message">{formErrors.checkInDate}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="checkOutDate">Check-out Date:</label>
                    <input type="date" id="checkOutDate" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
                    <span className="error-message">{formErrors.checkOutDate}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="numOfGuest">Number of Guests:</label>
                    <input type="number" id="numOfGuest" name="numOfGuest" value={formData.numOfGuest} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Total Fare:</label>
                    <span>Rs.{formData.totalFare.toFixed(2)}</span>
                </div>

                <button type="submit">Book Now</button>
            </form>
            
            {showSuccessMessage && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleClosePopup}>&times;</span>
                        <p>Booking successful!</p>
                        <p>Total Fare: Rs.{formData.totalFare.toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookingPage;
