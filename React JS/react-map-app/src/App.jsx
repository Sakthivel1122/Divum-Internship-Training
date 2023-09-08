import React from "react";
import "./App.css";
import MyMap from "./components/MyMap";
import "./components/MyMap.css";
import MapPopUp from "./components/MapPopUp";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <h2 >My Map Application</h2>
      </div>
        {/* <MapPopUp/> */}
        <MyMap />
    </div>
  );
}

export default App;
