import React from "react";
import "./TrainSeatDetails.scss";
const TrainSeatDetails = ({seat}) => {
  return (
    <div className="TrainSeatDetails">
        <div className="seat-details-top">
          <div className="seat-details-top-content">
            <p className="seat-name-text">{seat.seatName}</p>
            <p className="avail-count">AVAILABLE {seat.availCount}</p>
          </div>
          <p>Rs.{seat.price}</p>
        </div>
        <p className="free-text">Free Cancellation</p>
    </div>
  );
};

export default TrainSeatDetails;
