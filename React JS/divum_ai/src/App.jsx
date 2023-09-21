import React from "react";
import "./App.css";
import TextAI from "./components/TextAI";
import MainLayout from "./components/MainLayout";
const App = () => {
  return (
    <div className="App">
      <MainLayout>
        <TextAI/>
      </MainLayout>
    </div>
  );
};

export default App;
