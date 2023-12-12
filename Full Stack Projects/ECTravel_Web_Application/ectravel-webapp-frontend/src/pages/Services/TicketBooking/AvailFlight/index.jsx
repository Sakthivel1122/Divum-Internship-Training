import React from "react";
import "./AvailFlight.scss";
import FlightDetails from "../../../../components/FlightDetails";

const AvailFlight = () => {
  return (
    <div className="AvailFlight">
      <div className="navbar-container">
        <dir className="navbar-content-wrapper">
          <h2>Flight Booking</h2>
          <p className="basic-details">from to | date month</p>
        </dir>
      </div>
      <div className="avail-flight-container">
        <div className="filter-container">
          <div className="filter-content">
            <p className="filter-title">Stops From</p>
            <div className="filter-option-wrapper">
              <input type="checkbox" />
              <label>Non Stop</label>
            </div>
            <div className="filter-option-wrapper">
              <input type="checkbox" />
              <label>1 Stop</label>
            </div>
          </div>
        </div>
        <div className="fildered-flight-container">
            <FlightDetails/>
        </div>
      </div>
    </div>
  );
};

export default AvailFlight;
