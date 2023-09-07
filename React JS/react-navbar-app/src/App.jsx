import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <section id="home">Home</section>
      <section id="service">Service</section>
      <section id="about">About</section>
    </div>
  );
};

export default App;
