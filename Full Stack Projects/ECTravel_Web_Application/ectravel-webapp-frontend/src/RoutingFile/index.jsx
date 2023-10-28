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
import Admin from "../pages/Admin";
import ManageUser from "../pages/Admin/ManageUser";
import AdminHome from "../pages/Admin/AdminHome";
import ManageFlightBooking from "../pages/Admin/ManageFlightBooking";
import ManageTrainBooking from "../pages/Admin/ManageTrainBooking";
import ManageBusBooking from "../pages/Admin/ManageBusBooking";
import AvailTrain from "../pages/Services/TicketBooking/AvailTrain";
import AvailBus from "../pages/Services/TicketBooking/AvailBus";

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
          <Route path="availBus" element={<AvailBus />} />
          <Route path="busBooking" element={<BusBooking />} />
          <Route path="availTrain" element={<AvailTrain />} />
        </Route>
      </Route>

        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="manageUser" element={<ManageUser />} />
          <Route path="manageFlightBooking" element={<ManageFlightBooking />} />
          <Route path="manageTrainBooking" element={<ManageTrainBooking />} />
          <Route path="manageBusBooking" element={<ManageBusBooking />} />
        </Route>
        
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/addBus" element={<AddBus />} />
    </Routes>
  );
};

export default RoutingFile;
