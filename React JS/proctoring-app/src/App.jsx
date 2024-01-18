import React from "react";
import MainRoutes from "./routes/MainRoutes";
import { MainProvider } from "./context/MainContext";

const App = () => {
  return (
    <div className="App">
      <MainProvider>
        <MainRoutes />
      </MainProvider>
    </div>
  );
};

export default App;
