import React, { useEffect, useState } from "react";
import "./AvailFlight.scss";
import FlightDetails from "../../../../components/FlightDetails";
import { useLocation } from "react-router-dom";
import { monthNoToMonthStr } from "../../../../utils/TicketBooking";

const AvailFlight = () => {
  const location = useLocation();
  const [flightList, setFlightList] = useState(location.state.data);
  const [departFilterList, setDepartFilterList] = useState([
    {
      id: 1,
      label: "Before 6AM",
      time: "00:01 - 06:00",
      start: 0,
      end: 6,
      iconText: "wb_twilight",
      isSelected: false,
    },
    {
      id: 2,
      label: "6AM - 12PM",
      time: "06:01 - 12:00",
      start: 7,
      end: 12,
      iconText: "sunny",
      isSelected: false,
    },
    {
      id: 3,
      label: "12PM - 6PM",
      time: "12:01 - 18:00",
      start: 13,
      end: 18,
      iconText: "partly_cloudy_day",
      isSelected: false,
    },
    {
      id: 4,
      label: "After 6PM",
      time: "18:01 - 00:00",
      start: 19,
      end: 23,
      iconText: "bedtime",
      isSelected: false,
    },
  ]);
  const [arrivalFilterList, setArrivalFilterList] = useState([
    {
      id: 1,
      label: "Before 6AM",
      time: "00:01 - 06:00",
      start: 0,
      end: 6,
      iconText: "wb_twilight",
      isSelected: false,
    },
    {
      id: 2,
      label: "6AM - 12PM",
      time: "06:01 - 12:00",
      start: 7,
      end: 12,
      iconText: "sunny",
      isSelected: false,
    },
    {
      id: 3,
      label: "12PM - 6PM",
      time: "12:01 - 18:00",
      start: 13,
      end: 18,
      iconText: "partly_cloudy_day",
      isSelected: false,
    },
    {
      id: 4,
      label: "After 6PM",
      time: "18:01 - 00:00",
      start: 19,
      end: 23,
      iconText: "bedtime",
      isSelected: false,
    },
  ]);

  const [airLineList, setAirLineList] = useState([]);
  const [selectedAirLineList, setSelectedAirLineList] = useState([]);

  useEffect(() => {
    let tempAirLineList = [];
    location.state.data.map((flightData, index) => {
      if (!tempAirLineList.includes(flightData.flightName)) {
        tempAirLineList.push(flightData.flightName);
      }
    });
    setAirLineList(tempAirLineList);
  }, []);

  console.log("Location Value: ", location.state);
  const handleDepartFilterOnClick = (index) => {
    let arr = [...departFilterList];
    arr[index] = {
      ...arr[index],
      isSelected: !arr[index].isSelected,
    };
    setDepartFilterList(arr);
  };
  const handleArrivalFilterOnClick = (index) => {
    let arr = [...arrivalFilterList];
    arr[index] = {
      ...arr[index],
      isSelected: !arr[index].isSelected,
    };
    setArrivalFilterList(arr);
  };

  const handleAirLineFilterOnClick = (selectedAirLineName) => {
    let tempSelectedAirLineList = [...selectedAirLineList];
    if (tempSelectedAirLineList.includes(selectedAirLineName)) {
      tempSelectedAirLineList = tempSelectedAirLineList.filter(
        (airLineName) => {
          return airLineName !== selectedAirLineName;
        }
      );
    } else {
      tempSelectedAirLineList.push(selectedAirLineName);
    }
    setSelectedAirLineList(tempSelectedAirLineList);
  };
  console.log("selected", selectedAirLineList);
  return (
    <div className="AvailFlight">
      <div className="navbar-container">
        <dir className="navbar-content-wrapper">
          <h2>Flight Booking</h2>
          <p className="basic-details">
            {location.state.fromPlace +
              " to " +
              location.state.toPlace +
              " | " +
              location.state.date.split("-")[2] +
              " " +
              monthNoToMonthStr(location.state.date.split("-")[1])}
          </p>
        </dir>
      </div>
      <div className="avail-flight-container">
        <div className="filter-container">
          {/* ------ */}
          <div className="filter-content">
            <p className="filter-title">One Way Price</p>
            <div className="time-filter-content">
              <input type="range" className="price-range-filter" />
            </div>
          </div>
          {/* ------ */}
          <div className="filter-content">
            <p className="filter-title">Airlines</p>
            <div className="airline-filter-content">
              {airLineList.map((airLineName, index) => {
                return (
                  <label className="airline-option" key={index}>
                    <input
                      type="checkbox"
                      onClick={() => handleAirLineFilterOnClick(airLineName)}
                    />
                    {airLineName}
                  </label>
                );
              })}
            </div>
          </div>
          {/* ------ */}
          <div className="filter-content">
            <p className="filter-title">
              Stops From {location.state.fromPlace}
            </p>
            <div className="filter-option-wrapper">
              <input type="checkbox" />
              <label>Non Stop</label>
            </div>
            <div className="filter-option-wrapper">
              <input type="checkbox" />
              <label>1 Stop</label>
            </div>
          </div>

          {/* ------------- */}
          <div className="filter-content">
            <p className="filter-title">
              Departure From {location.state.fromPlace}
            </p>
            <div className="time-filter-content">
              {departFilterList.map((filterData, index) => {
                return (
                  <div
                    className={`time-filter-option ${
                      filterData.isSelected && "selected-time-filter"
                    }`}
                    onClick={() => handleDepartFilterOnClick(index)}
                  >
                    <span class="material-symbols-outlined option-icon">
                      {filterData.iconText}
                    </span>
                    <p className="time-filter-option-text">
                      {filterData.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ------------ */}
          <div className="filter-content">
            <p className="filter-title">Arrival at {location.state.toPlace}</p>
            <div className="time-filter-content">
              {arrivalFilterList.map((filterData, index) => {
                return (
                  <div
                    className={`time-filter-option ${
                      filterData.isSelected && "selected-time-filter"
                    }`}
                    onClick={() => handleArrivalFilterOnClick(index)}
                  >
                    <span class="material-symbols-outlined option-icon">
                      {filterData.iconText}
                    </span>
                    <p className="time-filter-option-text">
                      {filterData.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ------- */}
        </div>
        <div className="fildered-flight-container">
          {flightList &&
            flightList.map((flightData, index) => {
              return (
                <FlightDetails
                  key={index}
                  flightData={flightData}
                  fromPlace={location.state.fromPlace}
                  toPlace={location.state.toPlace}
                  date={location.state.date}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AvailFlight;
