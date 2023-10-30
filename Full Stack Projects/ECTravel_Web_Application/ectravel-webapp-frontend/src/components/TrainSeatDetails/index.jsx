import React from "react";
import "./TrainSeatDetails.scss";
const TrainSeatDetails = ({ seat }) => {
  return (
    <div
      className={`TrainSeatDetails ${
        seat.availCount === 0 ? `not-available` : ``
      }`}
    >
      <div className="seat-details-top">
        <div className="seat-details-top-content">
          <p className="seat-name-text">{seat.seatName}</p>
          <p className="avail-count">
            {seat.availCount === 0
              ? `NOT AVAILABLE`
              : `AVAILABLE ${seat.availCount}`}
          </p>
        </div>
        <p className="seat-price">Rs.{seat.price}</p>
      </div>
      <p className="free-text">Free Cancellation</p>
    </div>
  );
};

export default TrainSeatDetails;
