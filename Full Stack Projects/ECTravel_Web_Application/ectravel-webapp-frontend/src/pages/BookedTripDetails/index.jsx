import React from "react";
import "./BookedTripDetails.scss";
import bus_img from "../../assets/images/TicketBooking/bus_img.png";
const BookedTripDetails = () => {
  return (
    <div className="BookedTripDetails">
      <nav className="navbar-container completed-bg">
        <div className="navbar-content-wrapper">
          <div className="navbar-left-content">
            <p className="title">Your Bus Trip has completed</p>
            <div className="id-content-container">
              <p><span className="label-text">Booking ID#</span> NU711231033967402</p>
              <p><span className="label-text">PNR#</span> 57V2XUSF</p>
            </div>
          </div>
          <p className="navbar-right-content"><span className="label-text">Booked On</span> 14 Apr `22</p>
        </div>
      </nav>
      <div className="trip-details-content-container">
        <div className="content-left">
          {/* From - To details Container */}
          <div className="detail-1">
            <div className="wrapper-1">
              <p>
                <span className="from-to-title">Vedaranyam → Coimbatore </span>
                16 Apr 2022, Sat
              </p>
              <p className="completed-status">Completed</p>
            </div>
            <div className="wrapper-2">
              <div className="from-wrapper">
                <p>
                  <span className="time-text">07:30 PM </span>16 Apr, Sat
                </p>
                <p className="place-text">Vedaranyam</p>
                <p>Boarding Point - Vedaranyam</p>
              </div>
              <div className="duration-wrapper">
                <span className="material-symbols-outlined transport-icon">
                  directions_bus
                </span>
                <div className="duration-ui-container">
                  <span className="solid-circle" />
                  <span className="dashed-line" />
                  <span className="solid-circle" />
                </div>
              </div>
              <div className="to-wrapper">
                <p>
                  <span className="time-text">04:30 AM </span>17 Apr, Sun
                </p>
                <p className="place-text">Coimbatore</p>
                <p>Drop Point - Coimbatore</p>
              </div>
            </div>
            <div className="wrapper-3">
              <p>
                <span className="transport-name">Essaar</span> - Non A/c-seater
              </p>
            </div>
          </div>

          {/* Travellers Details Container */}

          <div className="detail-2">
            <p className="title">Traveller(s) (1)</p>
            <div className="traveller-detail">
              <div className="content-1">
                <span class="material-symbols-outlined">person</span>
                {/* <i class="fa-solid fa-user"></i> */}
                <span className="traveller-name">A Sakthivel </span>
                <p className="date-text">21yrs, Male</p>
              </div>
              <p>Seat 2</p>
            </div>
          </div>
          {/* Contact Details Container */}
          <div className="detail-3">
            <div className="nav-container">
              <p className="title">Contact Details</p>
              <p className="description">
                Operator or our service experts might connect with you on below
                contact details.
              </p>
            </div>
            <div className="contact-content">
              <span class="material-symbols-outlined">person</span>
              <p className="detail-text">A.Sakthivel</p>
            </div>
            <div className="contact-content">
              <span class="material-symbols-outlined">mail</span>
              <p className="detail-text">asakthivel1122@gmail.com</p>
            </div>
            <div className="contact-content">
              <span class="material-symbols-outlined">call</span>
              <p className="detail-text">+91 9344229677</p>
            </div>
          </div>
        </div>
        {/* Right side content (Price details) */}
        <div className="content-right">
          <p className="title">PRICING BREAKUP</p>
          <div className="price-wrapper">
            <p>Bus Charges</p>
            <p>₹ 1260</p>
          </div>
          <div className="total-price-wrapper">
            <p>Total cost</p>
            <p>₹ 1260</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedTripDetails;
