import { useEffect, useState } from "react";
import "./App.css";
import UserDetails from "./component/UserDetails";
import RegForm from "./component/RegForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alert from "./component/Alert";
import axios from "axios";
import API_LINKS from "./constants/ApiConstants"

function App() {
  // For Alert
  const [showAlert, setShowAlert] = useState(false);
  const [myAlert, setMyAlert] = useState({
    type: "",
    message: "",
    closeButton: false,
  });
  // Alert
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserDetails
          setShowAlert={setShowAlert}
          setMyAlert={setMyAlert}
        />
      ),
    },
    {
      path: "/form",
      element: (
        <RegForm
          setShowAlert={setShowAlert}
          setMyAlert={setMyAlert}
        />
      ),
    },
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />

        {showAlert && (
          <Alert
            type={myAlert.type}
            message={myAlert.message}
            closeButton={myAlert.closeButton}
            setShowAlert={setShowAlert}
          />
        )}
      </div>
    </>
  );
}

export default App;
