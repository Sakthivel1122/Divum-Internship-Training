import React, { useState } from "react";
import "./TicketBooking.css";
import { offers } from "../../constants/OffersConstant";
import offer_pic from "../../assets/images/TicketBooking/offer-pic.jpg";
const TicketBooking = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    vehicle: "flight",
  });
  const handleVehicle = (vehicle) => {
    setFormData({ ...formData, ["vehicle"]: vehicle });
    console.log(formData.vehicle, vehicle);
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
                  <span class="material-symbols-outlined">flightsmode</span>
                  <p>Flight</p>
                </div>
                <div
                  name="train"
                  className={`nav-item ${
                    formData.vehicle === "train" ? "active-vehicle" : ""
                  }`}
                  onClick={() => handleVehicle("train")}
                >
                  <span class="material-symbols-outlined">train</span>
                  <p>Train</p>
                </div>
                <div
                  name="bus"
                  className={`nav-item ${
                    formData.vehicle === "bus" ? "active-vehicle" : ""
                  }`}
                  onClick={() => handleVehicle("bus")}
                >
                  <span class="material-symbols-outlined">directions_bus</span>
                  <p>Bus</p>
                </div>
              </div>
              <div className="search-content">
                <div className="search-input-wrapper">
                  <div className="input-box-wrapper">
                    <label htmlFor="">From</label>
                    <input type="text" placeholder="From" />
                  </div>
                  <div className="input-box-wrapper">
                    <label htmlFor="">To</label>
                    <input type="text" placeholder="To" />
                  </div>
                  <div className="input-box-wrapper">
                    <label htmlFor="">Date</label>
                    <input type="date" />
                  </div>
                </div>
              </div>
              <button className="search-btn">SEARCH</button>
            </div>
          </div>
          <div className="offers">
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="details"></div>
      </div>
    </div>
  );
};

export default TicketBooking;
