import React from "react";
import "./FlightDetails.scss";

const FlightDetails = () => {
  return (
    <div className="FlightDetails">
      <div className="flight-details-top">
        <p className="flight-name">Air India Travels</p>
        <div className="pickup-details">
          <p className="time">20:25</p>
          <p>New Delhi</p>
        </div>
        <div className="duration-details">
          <p>5h 45mins</p>
          <p>---.---</p>
          <p>Goa</p>
        </div>
        <div className="drop-details">
          <p className="time">02:00</p>
          <p>Bengaluru</p>
        </div>
        <div className="book-now-wrapper">
          <div className="price-details">
            <p className="price">Rs.5000</p>
            <p>per adult</p>
          </div>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
      <div className="flight-details-bottom">
        <p className="view-details-text">View Flight Details</p>
      </div>
      {
        true && 
        <div className="view-details-container">
            
        </div>
      }
    </div>
  );
};

export default FlightDetails;
