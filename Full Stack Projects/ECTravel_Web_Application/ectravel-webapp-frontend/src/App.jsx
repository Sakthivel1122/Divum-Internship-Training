import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Services from "./pages/Services";
import Slider from "./components/Slider";
import { MainProvider } from "./contexts/MainContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import TicketBooking from "./pages/Services/TicketBooking";
import TrackLocation from "./pages/Services/TrackLocation";
import AddBus from "./pages/AddBus";
import BusBooking from "./pages/BusBooking";

const App = () => {
  return (
    <div className="App">
      <MainProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />

            <Route path="services" element={<Services />}>
              <Route index path="tracklocation" element={<TrackLocation />} />
              <Route index path="ticketbooking" element={<TicketBooking />} />
              {/* <Route index path="busBooking" element={<BusBooking />} /> */}
            </Route>
            <Route index path="/busBooking" element={<BusBooking />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/addBus" element={<AddBus />} />
        </Routes>
      </MainProvider>
    </div>
  );
};

export default App;
