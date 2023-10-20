import React from "react";
import "./App.css";
import RoutingFile from "./RoutingFile";
import { useMain } from "./contexts/MainContext";
import Alert from "./components/Alert";
import LoadingSpinner from "./components/LoadingSpinner";
const App = () => {
  const mainContext = useMain();
  return (
    <div className="App">
      <RoutingFile />
      {mainContext.myAlertBox.visible && (
        <Alert
          type={mainContext.myAlertBox.type}
          message={mainContext.myAlertBox.message}
          closeButton={mainContext.myAlertBox.closeBtn}
          setShowAlert={mainContext.handleSetMyAlertBox}
        />
      )}
      {mainContext.loadingSpinner && <LoadingSpinner />}
    </div>
  );
};

export default App;
