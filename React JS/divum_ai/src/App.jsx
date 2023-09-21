import React from "react";
import SideBar from "./components/SideBar";
import "./App.css"
import BodyArea from "./components/BodyArea";
const App = () => {
  return (
    <div className="App">
      <SideBar/>
      <BodyArea/>
    </div>
  );
};

export default App;
