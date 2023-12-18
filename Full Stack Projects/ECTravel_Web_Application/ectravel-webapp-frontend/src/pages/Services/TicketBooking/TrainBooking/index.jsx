import React, { useState } from "react";
import "./TrainBooking.scss";
import { useLocation, useNavigate } from "react-router-dom";
import TrainStationDropDown from "../../../../components/TrainStationDropDown";
import {
  calcDuration,
  monthNoToMonthStr,
} from "../../../../utils/TicketBooking";
import AddTravellerFormPopUp from "../../../../components/AddTravellerFormPopUp";
import { useDispatch, useSelector } from "react-redux";
import { removeTraveller } from "../../../../redux/features/TrainBooking/travellersList";
import { handlePayment } from "../../../../utils/payment";
import BookingInputBox from "../../../../shared/BookingInputBox";
import { contactDetailsForm } from "../../../../constants/formConstants";
const TrainBooking = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [train, setTrain] = useState(location.state);
  const [selectedStation, setSelectedStation] = useState(
    train.train.trainStationList[0]
  );
  const [popUp, setPopUp] = useState({
    visible: false,
    data: null,
  });
  const travellersList = useSelector((state) => state.train.travellersList);
  const [contactDetails,setContactDetails] = useState({
    emailId:"",
    mobileNo:"",
  })
  const handleSetSelectedStation = (value) => {
    setSelectedStation(value);
  };
  const handleAddTravellerBtn = () => {
    setPopUp({
      ...popUp,
      visible: true,
    });
  };
  const handleSetPopUp = (value) => {
    setPopUp(value);
  };
  const handleSetTravellersList = (value) => {};
  const handleEditBtn = (traveller, index) => {
    setPopUp({
      ...popUp,
      visible: true,
      data: {
        ...traveller,
        index: index,
      },
    });
  };
  const handleDeleteTravellerBtn = (index) => {
    dispatch(removeTraveller(index));
  };
  const handlePaymentCallBack = (response) => {
    console.log(response.razorpay_payment_id);
    // navigate(-1);
  };

  const handleContactDetailsOnChange = (e) => {
    const {name,value} = e.target;
    setContactDetails({
      ...contactDetails,
      [name]:value,
    })
  }
  return (
    <>
      <div className="TrainBooking">
        <nav className="train-booking-navbar">
          <div className="train-booking-navbar-content">
            <h2>Complete your booking</h2>
            {/* <p>Nagapattinam to Bangalore | 30 Oct</p> */}
            <p>{`${location.state.fromPlace} to ${location.state.toPlace} | ${
              location.state.train.train.pickUpDate.split("-")[2] +
              " " +
              monthNoToMonthStr(
                location.state.train.train.pickUpDate.split("-")[1]
              )
            } | ${location.state.train.train.pickUpTime}`}</p>
          </div>
        </nav>
        <div className="train-booking-container">
          <div className="train-booking-container-1">
            <div className="train-details-container">
              <div className="train-details-container-1">
                <p className="train-name">{train.train.train.trainName}</p>
                <div className="train-time-wrapper">
                  <p>{`${train.train.train.pickUpTime} - ${
                    train.train.train.pickUpDate.split("-")[2]
                  } ${monthNoToMonthStr(
                    train.train.train.pickUpDate.split("-")[1]
                  )}`}</p>
                  <hr />
                  <p>
                    {calcDuration(
                      train.train.train.pickUpDate,
                      train.train.train.dropDate,
                      train.train.train.pickUpTime,
                      train.train.train.dropTime
                    )}
                  </p>
                  <hr />
                  <p>{`${train.train.train.dropTime} - ${
                    train.train.train.dropDate.split("-")[2]
                  } ${monthNoToMonthStr(
                    train.train.train.dropDate.split("-")[1]
                  )}`}</p>
                </div>
              </div>
              <div className="train-details-container-2">
                <div className="train-details-wrapper">
                  <p className="title-text">Availability Status</p>
                  <div className="avail-status-box">
                    <p className="seat-type">{train.seat.seatName}</p>
                    <p className="avail-count">
                      AVAILABLE {train.seat.availCount}
                    </p>
                  </div>
                </div>
                <div className="train-details-wrapper">
                  <p className="title-text">Your Boading Station</p>
                  <TrainStationDropDown
                    className="train-station-drop-down"
                    state={selectedStation}
                    handleSetState={handleSetSelectedStation}
                    stationList={train.train.trainStationList}
                  />
                </div>
              </div>
            </div>
            <div className="add-travelers-container">
              <h2>Add Travellers & Preferences</h2>
              <div className="add-travelers-content">
                <div
                  className="add-travelers-btn-container"
                  onClick={handleAddTravellerBtn}
                >
                  + ADD TRAVELLER
                </div>
                {travellersList.map((traveller, index) => {
                  return (
                    <div className="traveller-details" key={index}>
                      <div className="traveller-details-content">
                        <p className="traveller-details-name-wrapper">
                          <p>{traveller.travellerName}</p>
                          <p>{`
                        ${traveller.gender === "Male" ? `(M)` : `(F)`},${
                            traveller.age
                          }
                        `}</p>
                        </p>
                        <p>{traveller.berthPreference}</p>
                      </div>
                      <dir className="btn-wrapper">
                        <button
                          className="edit-btn"
                          onClick={() => handleEditBtn(traveller, index)}
                        >
                          Edit
                        </button>
                        <span
                          className="material-symbols-outlined delete-icon"
                          onClick={() => handleDeleteTravellerBtn(index)}
                        >
                          close
                        </span>
                      </dir>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* --- */}


            <div className="flight-detail flight-detail-3">
            <h2>Contact Details</h2>

            <div className="traveller-form-wrapper">
              {contactDetailsForm.map((inputBoxData) => {
                return (
                  <div className="input-box-wrapper" key={inputBoxData.id}>
                    <label>{inputBoxData.label}</label>
                    <BookingInputBox
                      className=""
                      name={inputBoxData.name}
                      type={inputBoxData.type}
                      placeHolder={inputBoxData.placeHolder}
                      value={contactDetails[inputBoxData.name]}
                      handleOnChange={handleContactDetailsOnChange}
                    />
                  </div>
                );
              })}
            </div>
          </div>
            {/* --- */}
          </div>
          <div className="train-booking-container-2">
            <p className="title">Price Details</p>
            <div className="train-bill-container">
              <div className="details-wrapper">
                <p>Base far per adult</p>
                <p>Rs.{train.seat.price}</p>
              </div>
              <div className="details-wrapper">
                <p>Reservation Charge</p>
                <p>Rs.20</p>
              </div>
              <div className="details-wrapper">
                <p>Total price per adult</p>
                <p>Rs.{Number(train.seat.price) + 20}</p>
              </div>
            </div>
            <button
              className="payment-btn"
              onClick={() => {
                handlePayment(
                  Number(train.seat.price) + 20,
                  handlePaymentCallBack
                );
              }}
            >
              PAY & BOOK NOW
            </button>
          </div>
        </div>
      </div>
      {popUp.visible && (
        <AddTravellerFormPopUp
          popUp={popUp}
          handleSetPopUp={handleSetPopUp}
          handleSetTravellersList={handleSetTravellersList}
          travellersList={travellersList}
        />
      )}
    </>
  );
};

export default TrainBooking;
