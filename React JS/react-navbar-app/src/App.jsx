import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Element } from "react-scroll/modules";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Element name="home" className="section">Home</Element>
      <Element name="service" className="section">Service</Element>
      <Element name="about" className="section">About</Element>
    </div>
  );
};

export default App;
