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
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // console.log("seatList", seatList);
  }, []);

  const seatesLeft = seatList.filter((seat) => {
    return !seat.status;
  });
  const handleOnClick = () => {
    setVisible(!visible);
  };
  return (
    <div className={`BusDetails ${visible ? `active-bus` : ``}`} key={key}>
      <div
        className={`bus-details-top-container ${visible ? `bg-color` : ``}`}
        onClick={handleOnClick}
      >
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
              <p>{calcDuration(pickUpDate, dropDate, pickUpTime, dropTime)}</p>
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
      {visible && (
        <div className="bus-details-bottom-container">
          <div className="bus-details-bottom-flex-1">
            <div className="bus-details-bottom-header">
              <h4>Select Seats</h4>
              <p></p>
            </div>
            <div className="bus-details-bottom-content">
              <div className="bus-layout-container">

              </div>
            </div>
          </div>
          <div className="bus-details-bottom-flex-2">
            <div className="bus-details-bottom-header">
              <h4>Select Pickup & Drop Points</h4>
              <p></p>
            </div>
            <div className=""></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusDetails;
