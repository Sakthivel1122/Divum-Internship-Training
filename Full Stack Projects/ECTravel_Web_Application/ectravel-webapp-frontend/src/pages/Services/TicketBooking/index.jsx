import React, { useEffect, useState } from "react";
import "./TicketBooking.css";
import { offers } from "../../../constants/OffersConstant";
import axios from "axios";
import API_LINKS from "../../../constants/ApiConstant";
import BusDetails from "./BusDetails";
import { handleCheckAvailBusApiCall } from "../../../utils/ApiCalls";
const TicketBooking = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [busList, setBusList] = useState(null);
  const [formData, setFormData] = useState({
    vehicle: "bus",
    fromPlace: "Nagapattinam",
    toPlace: "Bangalore",
    date: "2023-10-06",
  });
  const [searchNavFormData, setSearchNavFormData] = useState({
    vehicle: "",
    fromPlace: "",
    toPlace: "",
    date: "",
  });
  console.log(formData);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filteredBuses, setFilteredBuses] = useState();
  const [filters, setFilters] = useState({
    operators: [],
    selectedOperators: [],
    filteredOperators: [],
  });
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
    let response;
    switch (formData.vehicle) {
      case "flight":
        console.log("flight");
        break;
      case "train":
        console.log("train");
        break;
      case "bus":
        response = handleCheckAvailBusApiCall(formData);
        response.then((res) => {
          setBusList(res.data);
          setFilteredBuses(res.data);
        });
        break;
      default:
        break;
    }
    if (response) {
      response.then((res) => {
        let operators = [];
        res.data.map((bus) => {
          if (operators.indexOf(bus.bus.busName) === -1) {
            operators.push(bus.bus.busName);
          }
        });
        setFilters({
          ...filters,
          operators: operators,
          filteredOperators: operators,
        });
      });
    }
  };

  const filterBus = () => {
    const len = selectedFilter.length;
    let temp;
    let resultBusList;
    switch (len) {
      case 0:
        resultBusList = busList;
        // setFilteredBuses(busList);
        break;
      case 1:
        resultBusList = busList.filter((bus) => {
          if (selectedFilter[0] === "AC" || selectedFilter[0] === "Non-AC") {
            return bus.bus.busType === selectedFilter[0];
          } else {
            return bus.bus.seatType === selectedFilter[0];
          }
        });
        // setFilteredBuses(resultBusList);
        break;
      case 2:
        resultBusList = busList.filter((bus) => {
          if (selectedFilter[0] === "AC" || selectedFilter[0] === "Non-AC") {
            return (
              bus.bus.busType === selectedFilter[0] &&
              bus.bus.seatType === selectedFilter[1]
            );
          } else {
            return (
              bus.bus.busType === selectedFilter[1] &&
              bus.bus.seatType === selectedFilter[0]
            );
          }
        });
        // setFilteredBuses(resultBusList);
        break;
      default:
        resultBusList = busList;
        break;
    }
    filterBusOperator(resultBusList);
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
  const handleClearAll = () => {
    setFilteredBuses(busList);
    setSelectedFilter([]);
  };
  const handleOperatorSelect = (e, value) => {
    let selectedOperators = filters.selectedOperators;
    if (
      selectedOperators.length === 0 &&
      filters.filteredOperators.length === filters.operators.length
    ) {
      selectedOperators = [];
    }
    if (e.target.checked) {
      selectedOperators = [...selectedOperators, value];
    } else {
      let temp = selectedOperators.filter(
        (selectedOperator) => selectedOperator !== value
      );
      selectedOperators = temp;
    }
    if (selectedOperators.length === 0) {
      setFilters({
        ...filters,
        selectedOperators: selectedOperators,
        filteredOperators: filters.operators,
      });
    } else {
      setFilters({
        ...filters,
        selectedOperators: selectedOperators,
        filteredOperators: selectedOperators,
      });
    }
  };
  useEffect(() => {
    filterBus();
  }, [selectedFilter, filters]);

  // useEffect(() => {
  //   filterBusOperator();
  // }, [filters]);

  const filterBusOperator = (resultBusList) => {
    let temp =
      resultBusList &&
      resultBusList.filter((bus) =>
        filters.filteredOperators.includes(bus.bus.busName)
      );
    setFilteredBuses(temp);
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
                <p className="clear-all" onClick={handleClearAll}>
                  CLEAR ALL
                </p>
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
                  <ul>
                    {filters.operators &&
                      filters.operators.map((operator) => {
                        return (
                          <li>
                            <input
                              type="checkbox"
                              onClick={(e) => handleOperatorSelect(e, operator)}
                            />
                            <p>{operator}</p>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="details-container">
              {filteredBuses &&
                filteredBuses.length > 0 &&
                filteredBuses.map((bus) => {
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
                      pickUpList={bus.pickUpList}
                      dropList={bus.dropList}
                    />
                  );
                })}
              {(!filteredBuses || filteredBuses.length === 0) && (
                <p className="no-result">No result found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketBooking;
