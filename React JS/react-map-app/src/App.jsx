import React from "react";
import "./App.css";
import MyMap from "./components/MyMap";
import "./components/MyMap.css";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <h2 >My Map Application</h2>
      </div>
        <MyMap />
    </div>
  );
}

export default App;
