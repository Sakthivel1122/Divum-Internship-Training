import React from "react";
import "./Admin.css";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="Admin">
      <AdminSideBar />
      <Outlet />
    </div>
  );
};

export default Admin;
