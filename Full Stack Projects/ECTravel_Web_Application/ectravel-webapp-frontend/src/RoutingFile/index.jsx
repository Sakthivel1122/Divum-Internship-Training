import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../components/MainLayout'
import About from '../pages/About'
import Profile from '../pages/Profile'
import Services from '../pages/Services'
import TrackLocation from '../pages/Services/TrackLocation'
import TicketBooking from '../pages/Services/TicketBooking'
import BusBooking from '../pages/BusBooking'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import AddBus from '../pages/AddBus'

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
          {/* <Route index path="busBooking" element={<BusBooking />} /> */}
        <Route index path="busBooking" element={<BusBooking />} />
        </Route>
        <Route index path="/busBooking" element={<BusBooking />} />
      </Route>

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      {/* <Route path="/slider" element={<Slider />} /> */}
      <Route path="/addBus" element={<AddBus />} />
    </Routes>
  )
}

export default RoutingFile