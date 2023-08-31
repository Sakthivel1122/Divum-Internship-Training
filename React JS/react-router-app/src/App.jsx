import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="App">
      App
      <Home/>
      <Home />
      <Router>
        <Routes>
          <Route path="/"></Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
