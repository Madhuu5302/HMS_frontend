import "./list.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import SearchItem from "../../Components/searchItem/SearchItem";


function List() {
  const location = useLocation();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  // eslint-disable-next-line
  const [options, setOptions] = useState(location.state.options);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state && location.state.destination) {
      setDestination(location.state.destination);
    }
  }, [location.state]);

  useEffect(() => {
    let url = null;
    if (destination) {
       url = `http://127.0.0.1:8000/api/hotels/?city=${destination}`;
    }
    if ( minPrice && maxPrice){
      url = `http://127.0.0.1:8000/api/hotels/?city=${destination}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    }
      setLoading(true);
      fetchHotels(url);
    // eslint-disable-next-line
  }, [destination, minPrice, maxPrice]); 

  const fetchHotels = (url) => {
    
    // console.log(destination)
    // http://127.0.0.1:8000/api/hotels/?city=agra&minPrice=100&maxPrice=500
    // if (minPrice) {
    //   url += &minprice=${minPrice};
    // }
    // if (maxPrice) {
    //   url += &maxprice=${maxPrice};
    // }
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // // Filter hotels based on price range
        // const filteredHotels = data.filter(hotel => {
        //   const price = parseInt(hotel.price);
        //   return (!minPrice || price >= parseInt(minPrice)) && (!maxPrice || price <= parseInt(maxPrice));
        // });
        // console.log(data);
        setHotels(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      });
  };

  const handleSearch = () => {
    fetchHotels();
  };

  const formatDate = (date) => {
    return `${format(date.startDate, "dd/MM/yyyy")} to ${format(
      date.endDate,
      "dd/MM/yyyy"
    )}`;
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {formatDate(date[0])}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Min price (per night)</span>
              <input
                type="number"
                className="lsOptionInput"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Max price (per night)</span>
              <input
                type="number"
                className="lsOptionInput"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
            </div>
            <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
            </div>
            <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
            </div>
              
         

            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              <p>Loading...</p>
            ) : hotels.length === 0 ? (
              <p>No hotels found in this location.</p>
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

export default List;