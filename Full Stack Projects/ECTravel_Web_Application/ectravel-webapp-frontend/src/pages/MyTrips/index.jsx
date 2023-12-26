import React, { useEffect, useState } from "react";
import "./MyTrips.scss";
import { handleGetMyTripsApiCall } from "../../utils/ApiCalls";
import { useMain } from "../../contexts/MainContext";
import DisplayTripDetails from "./DisplayTripDetails";

const MyTrips = () => {
  const mainContext = useMain();
  const [displayList, setDisplayList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    const dateObj = new Date();
    const dataObj = {
      userId: mainContext.loginDetails.userId,
      currentDate: dateObj.toISOString().split("T")[0],
      type: getRequestType(currentPage),
    };
    const response = handleGetMyTripsApiCall(dataObj);
    response.then((res) => {
      if (res) {
        setDisplayList(res.data);
      }
    });
  }, []);

  const getRequestType = (value) => {
    switch (value) {
      case 1:
        return "COMPLETED";
      case 2:
        return "CANCELLED";
      case 3:
        return "UPCOMING";
      default:
        return "";
    }
  };
  return (
    <>
      <div className="MyTrips">
        <div className="my-trips-container">
          <ul className="my-trips-navbar">
            <li
              className={"nav-item " + (currentPage === 1 ? "active" : "")}
              onClick={() => handlePageChange(1)}
            >
              UPCOMING
            </li>
            <li
              className={"nav-item " + (currentPage === 2 ? "active" : "")}
              onClick={() => handlePageChange(2)}
            >
              CANCELLED
            </li>
            <li
              className={"nav-item " + (currentPage === 3 ? "active" : "")}
              onClick={() => handlePageChange(3)}
            >
              COMPLETED
            </li>
          </ul>
          <div className="my-trip-content">
            <DisplayTripDetails/>
          </div>
        </div>
      </div>
      <div className="background-color-container" />
    </>
  );
};

export default MyTrips;
