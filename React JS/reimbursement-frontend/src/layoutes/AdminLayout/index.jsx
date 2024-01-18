import React from "react";
import "./AdminLayout.scss";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

const AdminLayout = () => {
  return (
    <div className="AdminLayout">
      <SideBar />
      <div className="layout-content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
