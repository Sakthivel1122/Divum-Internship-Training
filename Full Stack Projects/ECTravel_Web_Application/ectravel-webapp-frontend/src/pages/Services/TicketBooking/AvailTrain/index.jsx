import React, { useEffect, useState } from "react";
import "./AvailTrain.scss";
import TrainDetails from "../../../../components/TrainDetails";
import { useLocation } from "react-router-dom";
import {
  generateNextTenDate,
  monthNoToMonthStr,
} from "../../../../utils/TicketBooking";
import { handleGetAvailTrainApiCall } from "../../../../utils/ApiCalls";

const AvailTrain = () => {
  const location = useLocation();
  const [trainList, setTrainList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dateList, setDateList] = useState(
    generateNextTenDate(location.state.date)
  );
  const [activeDate, setActiveDate] = useState(location.state.date);
  const handlePrevPage = () => {
    if (activeIndex != 0) setActiveIndex(activeIndex - 1);
  };
  const handleNextPage = () => {
    if (activeIndex != 1) setActiveIndex(activeIndex + 1);
  };
  const handleDateOnClick = (newDate) => {
    const dataObj = {
      pickUpDate: newDate,
      fromPlace: location.state.fromPlace,
      toPlace: location.state.toPlace,
    };
    const response = handleGetAvailTrainApiCall(dataObj);
    response.then((res) => {
      setTrainList(res.data);
      setActiveDate(newDate);
    });
  };
  useEffect(() => {
    if (location.state) {
      setTrainList(location.state.data);
    }
  }, []);
  return (
    <div className="AvailTrain">
      <nav className="avail-train-navbar">
        <div className="navbar-wrapper">
          <h2>Train Booking</h2>
          <p>{`${location.state?.fromPlace} to ${location.state?.toPlace} | ${
            activeDate.split("-")[2]
          } ${monthNoToMonthStr(activeDate.split("-")[1])}`}</p>
        </div>
      </nav>
      <div className="avail-train-content">
        <div className="filter-container">
          <div className="title-container">
            <p className="title">Quick Filter</p>
            <p>CLEAR ALL</p>
          </div>
          <ul className="filter-list-wrapper">
            <li className="filter-item">
              <input type="checkbox" /> <p>Available</p>
            </li>
            <li className="filter-item">
              <input type="checkbox" /> <p>1A Seat</p>
            </li>
            <li className="filter-item">
              <input type="checkbox" /> <p>2A Seat</p>
            </li>
            <li className="filter-item">
              <input type="checkbox" /> <p>3A Seat</p>
            </li>
            <li className="filter-item">
              <input type="checkbox" /> <p>SL Seat</p>
            </li>
            <li className="filter-item">
              <input type="checkbox" /> <p>2S Seat</p>
            </li>
            <li className="filter-item">
              <input type="checkbox" /> <p>CC Seat</p>
            </li>
          </ul>
        </div>
        <div className="train-list-wrapper">
          <div className="date-slider-container">
            <span
              className="material-symbols-outlined arrow-btn"
              onClick={handlePrevPage}
            >
              chevron_left
            </span>
            <ul
              className="date-slider-content"
              style={{
                transform: `translateX(calc(-${activeIndex * 100}%))`,
              }}
            >
              {dateList.map((date, index) => {
                return (
                  <li
                    key={index}
                    className={`date-slider-item ${
                      activeDate === date.date ? `active` : ``
                    }`}
                    onClick={() => handleDateOnClick(date.date)}
                  >
                    {date.formatted}
                  </li>
                );
              })}
            </ul>
            <span
              className="material-symbols-outlined arrow-btn"
              onClick={handleNextPage}
            >
              chevron_right
            </span>
          </div>
          {trainList &&
            trainList.map((train, index) => {
              return <TrainDetails key={index} train={train} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default AvailTrain;
