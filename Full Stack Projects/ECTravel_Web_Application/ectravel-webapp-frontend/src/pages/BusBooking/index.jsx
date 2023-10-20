import React from "react";
import "./BusBooking.css";
const BusBooking = () => {
  return (
    <div className="BusBooking">
      <nav className="bus-booking-navbar">
        <div className="bus-booking-navbar-cotent">
          <h2>Complete your booking</h2>
          <p>{`Bangalore to Hyderabad | 7 Oct | 22:20`}</p>
        </div>
      </nav>
      <div className="bus-booking-container container">
        <div className="bus-booking-container-1">
          <div className="bus-booking-container-1-1">
            <div className="bus-booking-container-1-1-1">
              <div className="flex-wrapper">
                <h2>A1 Travels</h2>
                <p>{"A/C Seeter"}</p>
                <p>4.5</p>
              </div>
              <div className="flex-wrapper">
                <p>S12,S13</p>
              </div>
            </div>
            <div className="bus-booking-container-1-1-2">
              <p>20:40 20 Oct' 23, Fri</p>
              <p>8h 15m</p>
              <p>06:15 21 Oct' 23, Sat</p>
            </div>
            <div className="bus-booking-container-1-1-3">
              <p>Pickup</p>
              <p>Drop</p>
            </div>
          </div>
          <div className="bus-booking-container-1-2">
            <h2>Traveller Details</h2>
            {
              <div className="traveller-detils-wrapper">
                <p className="seat-no-text">Seat S1</p>
                <div className="input-box-wrapper">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Traveller Name" />
                </div>
                <div className="input-box-wrapper">
                  <label htmlFor="">Age</label>
                  <input type="text" placeholder="Age" />
                </div>
                <div className="input-box-wrapper">
                  <label htmlFor="">Gender</label>
                  <div className="gender-choise-wrapper">
                    <span>Male</span>
                    <span>Female</span>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className="bus-booking-container-1-3">
            <h2>Contact Details</h2>
            <div className="bus-booking-container-1-3-content">
              <dir className="input-box-wrapper">
                <label htmlFor="">Email Id</label>
                <input type="text" name="" id="" placeholder="abc@gmailcom"/>
              </dir>
              <dir className="input-box-wrapper">
                <label htmlFor="">Mobile No</label>
                <input type="text" name="" id="" placeholder="Type here..."/>
              </dir>
            </div>
          </div>
        </div>
        <div className="bus-booking-container-2">
          <h3>Price Detalis</h3>
          <div className="bus-booking-container-2-1">
            <label>Base Fare</label>
            <p>Rs.2000</p>
          </div>
          <div className="bus-booking-container-2-2">
            <label>Tax</label>
            <p>Rs.20</p>
          </div>
          <div className="bus-booking-container-2-3">
            <label htmlFor="">Total Amount</label>
            <p>Rs.2020</p>
          </div>
          <button className="continue-btn">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default BusBooking;
