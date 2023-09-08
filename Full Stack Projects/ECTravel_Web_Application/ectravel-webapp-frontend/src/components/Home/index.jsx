import React from "react";
import "./Home.css";
import travelPic from "../../assets/images/home/travel-pic.jpg"
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
const Home = () => {
  return (
    <>
      <NavBar/>
    <div className="Home">
      <img className="travel-pic" src={travelPic} alt="Travel pic" />
    </div>
    </>
  );
};

export default Home;
