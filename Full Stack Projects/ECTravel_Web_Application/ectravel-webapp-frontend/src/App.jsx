import React from "react";
import "./App.css";
import RoutingFile from "./RoutingFile";
import { useMain } from "./contexts/MainContext";
import Alert from "./components/Alert";
const App = () => {
  const mainContext = useMain();
  return (
    <div className="App">
        <RoutingFile/>
        {mainContext.myAlertBox.visible && (
        <Alert
          type={mainContext.myAlertBox.type}
          message={mainContext.myAlertBox.message}
          closeButton={mainContext.myAlertBox.closeBtn}
          setShowAlert={mainContext.handleSetMyAlertBox}
        />
      )}
    </div>
  );
};

export default App;
