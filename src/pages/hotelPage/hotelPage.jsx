import "./hotelPage.css";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import { useEffect, useState } from "react";
import SearchItem from "../../Components/searchItem/SearchItem";

function HotelPage() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/hotels/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setHotels(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
        setError("Error fetching hotels. Please try again later.");
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {error ? (
              <p>{error}</p>
            ) : hotels.length === 0 ? (
              <p>No hotels found.</p>
            ) : (
              hotels.map((hotel) => (
                <SearchItem key={hotel.id} hotel={hotel} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelPage;
