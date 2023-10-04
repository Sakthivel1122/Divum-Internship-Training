import React, { useEffect, useState } from "react";
import "./BusDetails.css";
import {
  calcDuration,
  monthNoToMonthStr,
} from "../../../../utils/TicketBooking";
const BusDetails = ({
  key,
  busName,
  rating,
  price,
  busType,
  pickUpDate,
  pickUpTime,
  dropDate,
  dropTime,
  seatList,
  seatType,
}) => {
  const [duration, setDuration] = useState({
    yearDue: 0,
    monthDue: 0,
    ddDue: 0,
    hourDue: 0,
    minuteDue: 0,
  });
  const handleSetDuration = (obj) => {
    setDuration(obj);
  };

  useEffect(() => {
    calcDuration(
      pickUpDate,
      dropDate,
      pickUpTime,
      dropTime,
      duration,
      handleSetDuration
    );
    // console.log("seatList", seatList);
  }, []);

  const seatesLeft = seatList.filter((seat) => {
    return !seat.status;
  });
  return (
    <div className="BusDetails" key={key}>
      <div className="bus-details-top">
        <div className="top-flex-1">
          <div className="bus-name">
            <h3>{busName}</h3>
            <p>{busType}</p>
            <p>{seatType[0].toUpperCase() + seatType.slice(1)}</p>
          </div>
          <div className="center-wrapper">
            <p>{`${pickUpTime} - ${
              pickUpDate.split("-")[2]
            } ${monthNoToMonthStr(pickUpDate.split("-")[1])}`}</p>
            <hr />
            <p>
              {`${duration.ddDue !== 0 ? `${duration.ddDue} day` : ``} 
            ${duration.hourDue !== 0 ? `${duration.hourDue} hr` : ``}
            ${duration.minuteDue !== 0 ? `${duration.minuteDue} min` : ``}`}
            </p>
            <hr />
            <p>{`${dropTime} - ${dropDate.split("-")[2]} ${monthNoToMonthStr(
              dropDate.split("-")[1]
            )}`}</p>
          </div>
          <p className="price">Rs.{price}</p>
        </div>
        <div className="top-flex-2">
          <div className="flex-left">
            <span>{rating}</span>
          </div>
          <div className="flex-right">
            <p>seats left {seatesLeft.length}</p>
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
