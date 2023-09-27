import React from "react";
import "./App.scss";
import Profile from "./component/Profile";
import Dashboard from "./component/Dashboard";
import SassExample from "./component/SassExample";

const App = () => {
  return (
    <div className="App">
      <h1>Higher Order Component (HOC)</h1>
      <br />
      <p>
        HOC allow you to <strong>reuse component logic</strong> across multiple
        components
      </p>
      <br />
      <h2>
        <Profile />
        <Dashboard />
      </h2>
      <br />
      <hr />
      <h1>SASS</h1>
      <SassExample/>
    </div>
  );
};

export default App;
