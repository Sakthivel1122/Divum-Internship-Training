import React, { useEffect, useState } from "react";
import "./AdminSideBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
const AdminSideBar = () => {
  const [manageBooking, setManageBooking] = useState({
    visible: false,
    selected: "",
  });
  const [activeItem, setActiveItem] = useState("admin");
  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, [window.location.href]);
  const navigate = useNavigate();
  const handlemanageBookingOnClick = () => {
    setManageBooking({
      ...manageBooking,
      visible: !manageBooking.visible,
    });
  };
  const handleAdminHomeOnClick = () => {
    navigate("/admin");
  };
  const handleManageUserOnClick = () => {
    navigate("manageUser");
  };
    console.log(activeItem.endsWith("admin") );
  return (
    <div className="AdminSideBar">
      <h2 className="logo">Dashboard</h2>
      <ul className="admin-sidebar-item-wrapper">
        <li
          className={`admin-sidebar-item ${
            activeItem.endsWith("admin") || activeItem.endsWith("admin/") ? `bg-black` : ``
          }`}
          onClick={handleAdminHomeOnClick}
        >
          Home
        </li>
        <li
          className={`admin-sidebar-item ${
            activeItem === "manageUser" ? `bg-black` : ``
          }`}
          onClick={handleManageUserOnClick}
        >
          Manage User
        </li>
        <li
          to="manageBooking"
          className={`admin-sidebar-item ${
            manageBooking.visible ? `bg-black` : ``
          }`}
          onClick={handlemanageBookingOnClick}
        >
          Manage Booking
          {manageBooking.visible ? (
            <span class="material-symbols-outlined">expand_less</span>
          ) : (
            <span class="material-symbols-outlined">expand_more</span>
          )}
        </li>
        {manageBooking.visible && (
          <ul className="admin-sidebar-manage-booking-item-wrapper">
            <li>Manage Flight Booking</li>
            <li>Manage Train Booking</li>
            <li>Manage Bus Booking</li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default AdminSideBar;
