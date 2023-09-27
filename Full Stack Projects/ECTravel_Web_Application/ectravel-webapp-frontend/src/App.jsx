import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useSearchParams,
} from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import TrackLocation from "./components/TrackLocation";
import MainLayout from "./components/MainLayout";
import { MainProvider, useMain } from "./Contexts/MainContext";
import Service from "./components/Service";

const App = () => {
  return (
    <div className="App">
      <MainProvider>
        <Routes>

          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="profile" element={<Profile/>}/>

            <Route path="services" element={<Service/>}>
              <Route index path="tracklocation" element={<TrackLocation/>}/>
            </Route>
          </Route>
          
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn/>}/>

        </Routes>
      </MainProvider>
    </div>
  );
};

export default App;
