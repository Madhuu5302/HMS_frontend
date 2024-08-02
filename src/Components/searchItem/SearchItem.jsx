import "./searchItem.css";
import React from "react";
import {Link} from 'react-router-dom';

function SearchItem({ hotel }) {
  return (
    <div className="searchItem">
      <img
        src={hotel.photos}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{hotel.name}</h1>
        <span className="siDistance">{hotel.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{hotel.city}</span>
        <span className="siFeatures">Free wifi,Car parking</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs.{hotel.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${hotel.id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;