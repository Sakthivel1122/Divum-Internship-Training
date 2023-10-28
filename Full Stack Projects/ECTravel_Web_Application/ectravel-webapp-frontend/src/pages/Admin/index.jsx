import React from "react";
import "./Admin.scss";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import TrainFormPopUP from "../../components/TrainFormPopUP";
import AddBusPopUp from "../../components/AddBusPopUp";
const Admin = () => {
  const adminContext = useAdmin();
  return (
    <div className="Admin">
        <AdminSideBar />
        <Outlet />
      {adminContext.popUp.addBusPopUp.visible && <AddBusPopUp/>}
      {adminContext.trainFormPopUp.visible && <TrainFormPopUP/>}
    </div>
  );
};

export default Admin;
