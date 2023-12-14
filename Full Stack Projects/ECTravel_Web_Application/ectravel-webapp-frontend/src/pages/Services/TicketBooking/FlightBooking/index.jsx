import React from "react";
import "./FlightBooking.scss";
import PaymentButton from "../../../../shared/PaymentButton";

const FlightBooking = () => {
  return (
    <div className="FlightBooking">
      <nav className="navbar">
        <div className="navbar-content">
          <h2>Complete your booking</h2>
          <p>from to | time</p>
        </div>
      </nav>
      <div className="flight-booking-content">
        <div className="flight-content-1">
          <div className="flight-detail-1">
            <div className="flight-detail-1-content-1">
              <div className="wrapper-1">
                <p>New Delhi → Bengaluru </p>
                <p>
                  <p>Dec 15</p>
                    Non Stop · 2h 55m</p>
              </div>
            </div>
            {/* ====== */}
          </div>
        </div>
        <div className="flight-content-2">
          <p className="price-detail price-detail-1">Fare Summary</p>
          <div className="price-detail price-detail-2">
            <p className="price-label">Base Fare</p>
            <p className="price-text">Rs.5000</p>
          </div>
          <div className="price-detail price-detail-3">
            <p className="price-label">Taxes and Surcharges</p>
            <p className="price-text">Rs.700</p>
          </div>
          <div className="price-detail price-detail-4">
            <p className="price-label">Total Amount</p>
            <p className="price-text">Rs.5700</p>
          </div>
          <PaymentButton className="flight-pay-now-btn" />
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
