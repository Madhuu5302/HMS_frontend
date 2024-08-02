import "./hotel.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft,faCircleArrowRight,faCircleXmark,faLocationDot,} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import RoomDetail from "../../Components/roomDetail/RoomDetail";




const Hotel = () => {
 
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1675616575252-02c2d8f14754?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8cm9vbXxlbnwwfDB8fHwxNzE1MzczNTEyfDE&ixlib=rb-4.0.3",
    },
    {
        src: "https://images.unsplash.com/photo-1649185885038-ce0483f9f5ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGxpdmluZyUyMHJvb20lMjB3aXRoJTIwY291Y2glMjBncmV5fGVufDB8fDB8fHww",
      },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    
    {
      src: "https://media.istockphoto.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=612x612&w=0&k=20&c=QMXz9HJVhU-8MtBYyeJxtqLz90j7r0SrR6FTWniPkgc=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  useEffect(() => {
    fetchHotelDetails(id);
  }, [id]);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };


  const fetchHotelDetails = (hotelId) => {
    // Fetch hotel details using the hotel ID
    fetch(`http://127.0.0.1:8000/api/hotels/${hotelId}`)
      .then(response => response.json())
      .then(data => {
        setHotel(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching hotel details:', error);
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hotel) {
    return <p>No hotel found.</p>;
  }

  const handleBookNowClick = () => {
    navigate('/hotels/:id');
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={handleBookNowClick}>Reserve or Book Now!</button>
          <h1 className="hotelTitle">{hotel.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>  {hotel.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location: {hotel.distance}
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over {hotel.cheapestPrice} at this property and excape from your regular routine
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
               
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">{hotel.desc}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Stay 3 Nights, Get the 4th Night Free </h1>
              <span>
                Located in the real heart of {hotel.city}, this property has an
                excellent location score of {hotel.rating}!
              </span>
              <h2>
                <b>Best discounts</b>
              </h2>
              
              <button onClick={handleBookNowClick}>Reserve Today</button>
            </div>
          </div>
        </div>
        <RoomDetail hotelId={id} />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;