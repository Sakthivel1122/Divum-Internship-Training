import React from "react";
import "./PaymentButton.scss";

const PaymentButton = ({className}) => {
  return <div className={"PaymentButton " + className}>
    PAY NOW
  </div>;
};

export default PaymentButton;
