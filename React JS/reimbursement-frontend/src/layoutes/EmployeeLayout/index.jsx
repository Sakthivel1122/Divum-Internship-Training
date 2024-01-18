import React from "react";
import "./EmployeeLayout.scss";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { Outlet } from "react-router-dom";

const EmployeeLayout = () => {
  return (
    <div className="EmployeeLayout">
      <SideBar />
      <div className="layout-content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeLayout;
