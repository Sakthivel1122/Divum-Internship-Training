import React from "react";
import "./Services.css";
import { Outlet } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="Services">
        <Outlet />
      </div>
    </>
  );
};

export default Services;
