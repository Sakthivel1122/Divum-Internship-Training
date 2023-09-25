import React from "react";
import "./SideBarBtn.css";
const SideBarBtn = ({ icon, value }) => {
  return (
    <button className="SideBarBtn">
      <img src={icon} />
      <p>{value}</p>
    </button>
  );
};

export default SideBarBtn;
