import React from "react";
import "./Admin.scss";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
import AddBusPopUp from "./AddBusPopUp";
import { useAdmin } from "../../contexts/AdminContext";
const Admin = () => {
  const adminContext = useAdmin();
  return (
    <div className="Admin">
        <AdminSideBar />
        <Outlet />
      {adminContext.popUp.addBusPopUp.visible && <AddBusPopUp/>}
    </div>
  );
};

export default Admin;
