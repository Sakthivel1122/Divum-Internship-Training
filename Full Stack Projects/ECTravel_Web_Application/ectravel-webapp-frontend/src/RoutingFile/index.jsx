import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Services from "../pages/Services";
import TrackLocation from "../pages/Services/TrackLocation";
import TicketBooking from "../pages/Services/TicketBooking";
import BusBooking from "../pages/BusBooking";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import AddBus from "../pages/AddBus";
import AvailBus from "../pages/AvailBus";
import Admin from "../pages/Admin";
import ManageUser from "../pages/Admin/ManageUser";
import AdminHome from "../pages/Admin/AdminHome";
import ManageBooking from "../pages/Admin/ManageBooking";

const RoutingFile = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />

        <Route path="services" element={<Services />}>
          <Route index path="tracklocation" element={<TrackLocation />} />
          <Route path="ticketbooking" element={<TicketBooking />} />
          <Route path="busBooking" element={<BusBooking />} />
          <Route path="availBus" element={<AvailBus />} />
          {/* <Route index path="busBooking" element={<BusBooking />} /> */}
        </Route>
        {/* <Route index path="/busBooking" element={<BusBooking />} /> */}
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<AdminHome />} />
        <Route path="manageUser" element={<ManageUser />} />
        <Route path="manageBooking" element={<ManageBooking />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      {/* <Route path="/slider" element={<Slider />} /> */}
      <Route path="/addBus" element={<AddBus />} />
    </Routes>
  );
};

export default RoutingFile;
