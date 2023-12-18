import React from "react";
import "./MyTrips.scss";

const MyTrips = () => {
  return (
    <>
    <div className="MyTrips">
      <div className="my-trips-container">
        <ul className="my-trips-navbar">
          <li className="nav-item">UPCOMING</li>
          <li className="nav-item">CANCELLED</li>
          <li className="nav-item">COMPLETED</li>
        </ul>
        <div className="my-trip-content">
            Details
        </div>
      </div>
    </div>
      <div className="background-color-container"/>
    </>
  );
};

export default MyTrips;
