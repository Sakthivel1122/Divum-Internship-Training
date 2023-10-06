import React from "react";
import "./BusBooking.css";
const BusBooking = () => {
  return (
    <div className="BusBooking">
      <nav className="bus-booking-navbar">
        <div className="bus-booking-navbar-cotent">
          <h2>Complete your booking</h2>
          <p>{`Bangalore to Hyderabad | 7 Oct | 22:20`}</p>
        </div>
      </nav>
      <div className="bus-booking-container"></div>
    </div>
  );
};

export default BusBooking;
