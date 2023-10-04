import React from "react";
import "./PrimaryBtn.css";
const PrimaryBtn = ({className, type, onClick, icon, value}) => {
  return (
    <button className="primary-btn" type={type} onClick={onClick}>
      <img src={icon} alt="icon" />
      <p>
        <span>{value}</span>
      </p>
    </button>
  );
};

export default PrimaryBtn;
