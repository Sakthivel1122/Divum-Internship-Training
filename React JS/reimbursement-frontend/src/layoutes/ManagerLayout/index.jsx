import React from "react";
import "./EmployeeLayout.scss";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

const ManagerLayout = () => {
  return (
    <div className="ManagerLayout">
      <SideBar />
      <div className="layout-content">
      <TopBar />
      <Outlet/>
      </div>
    </div>
  );
};

export default ManagerLayout;
