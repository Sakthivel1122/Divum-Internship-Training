import React from "react";
import "./ServicesDropDown.css";
import { useNavigate } from "react-router-dom";
const ServicesDropDown = () => {
  const navigate = useNavigate();
  return (
    <div className="ServicesDropDown">
      <div className="dropdown-content">
        <ul>
          <li onClick={() => navigate("/services/tracklocation")}>Track Location</li>
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
