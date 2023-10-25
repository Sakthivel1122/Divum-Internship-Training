import React from "react";
import "./App.scss";
import RoutingFile from "./RoutingFile";
import { useMain } from "./contexts/MainContext";
import Alert from "./components/Alert";
import LoadingSpinner from "./components/LoadingSpinner";
import { AdminProvider } from "./contexts/AdminContext";
const App = () => {
  const mainContext = useMain();
  return (
    <div className="App">
      <AdminProvider>
      <RoutingFile />
      </AdminProvider>
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
