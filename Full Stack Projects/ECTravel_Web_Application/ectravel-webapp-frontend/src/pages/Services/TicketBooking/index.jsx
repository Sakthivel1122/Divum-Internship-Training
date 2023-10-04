import React, { useEffect, useState } from "react";
import "./TicketBooking.css";
import { offers } from "../../../constants/OffersConstant";
import axios from "axios";
import API_LINKS from "../../../constants/ApiConstant";
import BusDetails from "./BusDetails";
const TicketBooking = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [busList, setBusList] = useState(null);
  const [formData, setFormData] = useState({
    vehicle: "flight",
    fromPlace: "",
    toPlace: "",
    date: "",
  });
  const [searchNavFormData, setSearchNavFormData] = useState({
    vehicle: "flight",
    fromPlace: "",
    toPlace: "",
    date: "",
  });
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filteredBuses, setFilteredBuses] = useState();

  const handleVehicle = (vehicle) => {
    setFormData({ ...formData, ["vehicle"]: vehicle });
  };
  const prevPage = () => {
    if (activeIndex != 0) setActiveIndex(activeIndex - 1);
  };
  const nextPage = () => {
    if (activeIndex != offers.length - 3) setActiveIndex(activeIndex + 1);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setSearchNavFormData({
      vehicle: formData.vehicle,
      fromPlace: formData.fromPlace,
      toPlace: formData.toPlace,
      date: formData.date,
    });
    switch (formData.vehicle) {
      case "flight":
        console.log("flight");
        break;
      case "train":
        console.log("flight");
        break;
      case "bus":
        try {
          const availBus = await axios.post(
            API_LINKS.BUS_API_LINKS.GET_AVAIL_BUSES,
            formData
          );
          console.log(availBus.data);
          setBusList(availBus.data);
          setFilteredBuses(availBus.data);
        } catch (error) {
          alert(error);
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    filterBus();
  }, [selectedFilter]);

  const filterBus = () => {
  };

  const handleFilterBtnClick = (item) => {
    if (selectedFilter.includes(item)) {
      let filter = selectedFilter.filter((ele) => ele !== item);
      setSelectedFilter(filter);
    } else {
      let selectedFilterArr = selectedFilter;
      switch (item) {
        case "AC":
          if (selectedFilterArr.includes("Non-AC")) {
            let filter = selectedFilterArr.filter((ele) => ele !== "Non-AC");
            selectedFilterArr = filter;
          }
          break;
        case "Non-AC":
          if (selectedFilterArr.includes("AC")) {
            let filter = selectedFilterArr.filter((ele) => ele !== "AC");
            selectedFilterArr = filter;
          }
          break;

        case "seater":
          if (selectedFilterArr.includes("sleeper")) {
            let filter = selectedFilterArr.filter((ele) => ele !== "sleeper");
            selectedFilterArr = filter;
          }
          break;
        case "sleeper":
          if (selectedFilterArr.includes("seater")) {
            let filter = selectedFilterArr.filter((ele) => ele !== "seater");
            selectedFilterArr = filter;
          }
          break;
        default:
          break;
      }
      selectedFilterArr = [...selectedFilterArr, item];
      setSelectedFilter(selectedFilterArr);
    }
  };
  return (
    <div className="TicketBooking">
      <div className="search-bg">
        <div className="ticketbooking-container">
          <div className="ticketbooking-wrapper">
            <div className="search-container">
              <div className="nav-links">
                <div
                  className={`nav-item ${
                    formData.vehicle === "flight" ? "active-vehicle" : ""
                  }`}
                  onClick={() => handleVehicle("flight")}
                >
                  <span className="material-symbols-outlined">flightsmode</span>
                  <p>Flight</p>
                </div>
                <div
                  name="train"
                  className={`nav-item ${
                    formData.vehicle === "train" ? "active-vehicle" : ""
                  }`}
                  onClick={() => handleVehicle("train")}
                >
                  <span className="material-symbols-outlined">train</span>
                  <p>Train</p>
                </div>
                <div
                  name="bus"
                  className={`nav-item ${
                    formData.vehicle === "bus" ? "active-vehicle" : ""
                  }`}
                  onClick={() => handleVehicle("bus")}
                >
                  <span className="material-symbols-outlined">
                    directions_bus
                  </span>
                  <p>Bus</p>
                </div>
              </div>
              <div className="search-content">
                <div className="search-input-wrapper">
                  <div className="input-box-wrapper">
                    <label htmlFor="">From</label>
                    <input
                      name="fromPlace"
                      type="text"
                      placeholder="From"
                      value={formData.fromPlace}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="input-box-wrapper">
                    <label htmlFor="">To</label>
                    <input
                      name="toPlace"
                      type="text"
                      placeholder="To"
                      value={formData.toPlace}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="input-box-wrapper">
                    <label htmlFor="">Date</label>
                    <input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
              </div>
              <button className="search-btn" onClick={handleSubmit}>
                SEARCH
              </button>
            </div>
          </div>
          <div className="offers">
            <span
              className="material-symbols-outlined prev-btn"
              onClick={prevPage}
              style={{ color: activeIndex === 0 ? "lightgrey" : "black" }}
            >
              navigate_before
            </span>
            <div className="offers-wrapper">
              <div
                className="offers-slide-wrapper"
                style={{
                  transform: `translateX(calc(-${activeIndex * 100}% / 3))`,
                }}
              >
                {offers.map((offer) => {
                  return (
                    <div className="offers-slides" key={offer.id}>
                      <div>
                        <img src={offer.img} alt="offer_img" />
                        <div>
                          <p>Place: {offer.place}</p>
                          <p>Discount: {offer.discount}%</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <span
              className="material-symbols-outlined next-btn"
              onClick={nextPage}
              style={{
                color:
                  activeIndex === offers.length - 3 ? "lightgrey" : "black",
              }}
            >
              navigate_next
            </span>
          </div>
        </div>
      </div>
      {busList && (
        <div className="search-details-container">
          <nav className="search-navbar">
            <ul>
              <li>
                From <p>{searchNavFormData.fromPlace}</p>
              </li>
              <li>
                To <p>{searchNavFormData.toPlace}</p>
              </li>
              <li>
                Date <p>{searchNavFormData.date}</p>
              </li>
            </ul>
          </nav>
          <div className="search-details">
            <div className="filter-container">
              <nav className="filter-nav">
                <h3>Filters</h3>
                <p>CLEAR ALL</p>
              </nav>
              <div className="filter-1">
                <h4>AC</h4>
                <div className="options-wrapper">
                  <span
                    className={
                      selectedFilter.includes("AC") ? "active-filter" : ""
                    }
                    onClick={() => handleFilterBtnClick("AC")}
                  >
                    AC
                  </span>
                  <span
                    className={
                      selectedFilter.includes("Non-AC") ? "active-filter" : ""
                    }
                    onClick={() => handleFilterBtnClick("Non-AC")}
                  >
                    Non AC
                  </span>
                </div>
              </div>
              <div className="filter-2">
                <h4>Seat type</h4>
                <div className="options-wrapper">
                  <span
                    className={
                      selectedFilter.includes("sleeper") ? "active-filter" : ""
                    }
                    onClick={() => handleFilterBtnClick("sleeper")}
                  >
                    Sleeper
                  </span>
                  <span
                    className={
                      selectedFilter.includes("seater") ? "active-filter" : ""
                    }
                    onClick={() => handleFilterBtnClick("seater")}
                  >
                    Seater
                  </span>
                </div>
              </div>
              <div className="filter-3">
                <h4>Travel Operator</h4>
                <div className="options-wrapper">
                  <input type="text" placeholder="Search" />
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <p>A1 Travels</p>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <p>A2 Travels</p>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <p>A3 Travels</p>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <p>A4 Travels</p>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <p>A5 Travels</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="details-container">
              {busList &&
                busList.map((bus) => {
                  return (
                    <BusDetails
                      key={bus.busId}
                      busName={bus.bus.busName}
                      rating={bus.bus.rating}
                      price={bus.bus.price}
                      busType={bus.bus.busType}
                      pickUpDate={bus.bus.pickUpDate}
                      pickUpTime={bus.bus.pickUpTime}
                      dropDate={bus.bus.dropDate}
                      dropTime={bus.bus.dropTime}
                      seatList={bus.seatList}
                      seatType={bus.bus.seatType}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketBooking;
