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
import Service from "./components/Service";
import About from "./components/About";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

const App = () => {
  const [navBar, setNavBar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");
  const setLogInStatus = (state) => {
    setIsLoggedIn(state);
  };
  const handleLoggedUser = (user) => {
    setLoggedUser(user);
  };
  const setNavBarVisiblity = (state) => {
    setNavBar(state);
  };
  useEffect(() => {

    setNavBarVisiblity(true);
  }, []);
  return (
    <div className="App">
      {navBar && (
        <NavBar
          setNavBarVisiblity={setNavBarVisiblity}
          isLoggedIn={isLoggedIn}
          setLogInStatus={setLogInStatus}
          loggedUser={loggedUser}
          handleLoggedUser={handleLoggedUser}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setNavBarVisiblity={setNavBarVisiblity}
              isLoggedIn={isLoggedIn}
              setLogInStatus={setLogInStatus}
              handleLoggedUser={handleLoggedUser}
            />
          }
        />
        <Route
          path="/:emailId"
          element={
            <Home
              setNavBarVisiblity={setNavBarVisiblity}
              isLoggedIn={isLoggedIn}
              setLogInStatus={setLogInStatus}
              handleLoggedUser={handleLoggedUser}
            />
          }
        />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile loggedUser={loggedUser} setLogInStatus={setLogInStatus}/>} />
        <Route
          path="/signup"
          element={<SignUp setNavBarVisiblity={setNavBarVisiblity} />}
        />
        <Route
          path="/login"
          element={<LogIn setNavBarVisiblity={setNavBarVisiblity} />}
        />
      </Routes>
    </div>
  );
};

export default App;
