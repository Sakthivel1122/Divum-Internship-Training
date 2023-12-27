import React from "react";
import "./BookedTripDetails.scss";
import bus_img from "../../assets/images/TicketBooking/bus_img.png";
const BookedTripDetails = () => {
  return (
    <div className="BookedTripDetails">
      <nav className="navbar-container completed-bg">
        <div className="navbar-content-wrapper">
        <p>Your Bus Trip has completed</p>
        {/* <img className="bus-png-img" src={bus_img} alt="bus_img" /> */}
        </div>
      </nav>
    </div>
  );
};

export default BookedTripDetails;
