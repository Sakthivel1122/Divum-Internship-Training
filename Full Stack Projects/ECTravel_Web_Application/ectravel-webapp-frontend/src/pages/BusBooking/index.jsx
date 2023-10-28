import React, { useEffect, useState } from "react";
import "./BusBooking.scss";
import { useLocation } from "react-router-dom";
import { useMain } from "../../contexts/MainContext";
const BusBooking = () => {
  const location = useLocation();
  const mainContext = useMain();
  const setInitialTravellersDetails = () => {
    let objList = [];
    location.state.selectSeat.selectedSeatDetailsList.map((seatNo) => {
      objList.push({
        name: "",
        age: "",
        gender: "",
      });
    });
    return objList;
  };
  const [bookingData, setBookingData] = useState({
    travellersDetails: setInitialTravellersDetails(),
    contactDetails: {
      emailId: "",
      mobileNo: "",
    },
  });
  const selectedSeatNoListNum = location.state.selectedSeatNoList.split(",");
  const handleContactDetailsOnChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      contactDetails: {
        ...bookingData.contactDetails,
        [name]: value,
      },
    });
  };
  const handleTravellersOnChange = (e, index) => {
    const { name, value } = e.target;
    let tempList = bookingData.travellersDetails;
    tempList[index] = {
      ...tempList[index],
      [name]: value,
    };
    setBookingData({
      ...bookingData,
      travellersDetails: tempList,
    });
  };
  const handleSelectGender = (index, value) => {
    let tempList = bookingData.travellersDetails;
    tempList[index] = {
      ...tempList[index],
      gender: value,
    };
    setBookingData({
      ...bookingData,
      travellersDetails: tempList,
    });
  };
  return (
    <div className="BusBooking" onLoad={mainContext.handleOnLoad}>
      <nav className="bus-booking-navbar">
        <div className="bus-booking-navbar-cotent">
          <h2>Complete your booking</h2>
          <p>{`${location.state.fromPlace} to ${location.state.toPlace} | ${
            location.state.formattedPickUpDateTime.split(" - ")[1]
          } | ${location.state.formattedPickUpDateTime.split(" - ")[0]}`}</p>
        </div>
      </nav>
      <div className="bus-booking-container container">
        <div className="bus-booking-container-1">
          <div className="bus-booking-container-1-1">
            <div className="bus-booking-container-1-1-1">
              <div className="flex-wrapper">
                <h2>{location.state.busName}</h2>
                <p>{location.state.busType + " " + location.state.seatType}</p>
                <p>{location.state.rating}</p>
              </div>
              <div className="flex-wrapper">
                <p>{location.state.selectedSeatNoList}</p>
              </div>
            </div>
            <div className="bus-booking-container-1-1-2">
              <p>{location.state.formattedPickUpDateTime}</p>
              <p>{location.state.duration}</p>
              <p>{location.state.formattedDropDateTime}</p>
            </div>
            <div className="bus-booking-container-1-1-3">
              <p>{location.state.pickUpPlace}</p>
              <p>{location.state.dropPlace}</p>
            </div>
          </div>
          <div className="bus-booking-container-1-2">
            <h2>Traveller Details</h2>
            {location.state.selectSeat.selectedSeatDetailsList.map(
              (seat, index) => {
                return (
                  <div className="traveller-detils-wrapper">
                    <p className="seat-no-text">
                      Seat {selectedSeatNoListNum[index]}
                    </p>
                    <div className="input-box-wrapper">
                      <label htmlFor="">Name</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Traveller Name"
                        value={bookingData.travellersDetails[index].name}
                        onChange={(e) => handleTravellersOnChange(e, index)}
                      />
                    </div>
                    <div className="input-box-wrapper">
                      <label htmlFor="">Age</label>
                      <input
                        name="age"
                        type="number"
                        placeholder="Age"
                        value={bookingData.travellersDetails[index].age}
                        onChange={(e) => handleTravellersOnChange(e, index)}
                      />
                    </div>
                    <div className="input-box-wrapper">
                      <label htmlFor="">Gender</label>
                      <div className="gender-choise-wrapper">
                        <span
                          className={`${
                            bookingData.travellersDetails[index].gender ===
                            "male"
                              ? `selected-gender`
                              : ``
                          }`}
                          onClick={() => handleSelectGender(index, "male")}
                        >
                          Male
                        </span>
                        <span
                          className={`${
                            bookingData.travellersDetails[index].gender ===
                            "female"
                              ? `selected-gender`
                              : ``
                          }`}
                          onClick={() => handleSelectGender(index, "female")}
                        >
                          Female
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="bus-booking-container-1-3">
            <h2>Contact Details</h2>
            <div className="bus-booking-container-1-3-content">
              <dir className="input-box-wrapper">
                <label htmlFor="">Email Id</label>
                <input
                  type="text"
                  name="emailId"
                  id=""
                  placeholder="abc@gmailcom"
                  value={bookingData.contactDetails.emailId}
                  onChange={handleContactDetailsOnChange}
                />
              </dir>
              <dir className="input-box-wrapper">
                <label htmlFor="">Mobile No</label>
                <input
                  type="number"
                  name="mobileNo"
                  id=""
                  placeholder="Type here..."
                  maxLength={10}
                  value={bookingData.contactDetails.mobileNo}
                  onChange={handleContactDetailsOnChange}
                />
              </dir>
            </div>
          </div>
        </div>
        <div className="bus-booking-container-2">
          <h3>Price Detalis</h3>
          <div className="bus-booking-container-2-1">
            <label>Base Fare</label>
            <p>Rs.{location.state.totalPrice}</p>
          </div>
          <div className="bus-booking-container-2-2">
            <label>Tax</label>
            <p>Rs.20</p>
          </div>
          <div className="bus-booking-container-2-3">
            <label htmlFor="">Total Amount</label>
            <p>Rs.{location.state.totalPrice + 20}</p>
          </div>
          <button className="continue-btn">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default BusBooking;
