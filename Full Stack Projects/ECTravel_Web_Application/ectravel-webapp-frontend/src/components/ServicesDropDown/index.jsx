import React from "react";
import "./ServicesDropDown.css";
import { NavLink, useNavigate } from "react-router-dom";
const ServicesDropDown = () => {
  const navigate = useNavigate();
  return (
    <div className="ServicesDropDown"> 
      <div className="dropdown-content">
        <div className="service-wrapper">
          <NavLink activeClass="active-service" to="services/tracklocation" className="service-link">
            Track Location
          </NavLink>
          <NavLink to="" className="service-link">
            Ticket Booking
          </NavLink>
          <NavLink to="" className="service-link">
            Taxi Booking
          </NavLink>
          <NavLink to="" className="service-link">
            Hotel Booking
          </NavLink>
          <NavLink to="" className="service-link">
            Food Order
          </NavLink>
          <NavLink to="" className="service-link">
            Tour Planner
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropDown;
