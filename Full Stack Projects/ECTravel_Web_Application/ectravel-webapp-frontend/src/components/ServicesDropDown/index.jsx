import React from "react";
import "./ServicesDropDown.css";
const ServicesDropDown = () => {
  return (
    <div className="ServicesDropDown">
      <div className="dropdown-content">
        <ul>
          <li>Track Location</li>
          <li>Ticket Booking</li>
          <li>Taxi Booking</li>
          <li>Hotel Booking</li>
          <li>Food Order</li>
          <li>Tour Planner</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesDropDown;
