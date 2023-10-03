import React from "react";
import "./BusDetails.css";
const BusDetails = ({busName, rating,price,busType}) => {
  return (
    <div className="BusDetails">
      <div className="bus-details-top">
        <div className="top-flex-1">
          <h3>{busName}</h3>
          <div className="center-wrapper">
            {/* <p>{busType}</p> */}
            {/* <p></p> */}
            {busType}
          </div>
          <p>Rs.{price}</p>
        </div>
        <div className="top-flex-2">
          <div className="flex-left">
            <span>{rating}</span>
          </div>
          <div className="flex-right">
            <p>seats left 10</p>
            <p>Window seats 5</p>
          </div>
        </div>
      </div>
      <div className="bus-details-bottom">
          <button>SELECT SEATS</button>
      </div>
    </div>
  );
};

export default BusDetails;
