import { useEffect, useState } from "react";
import "./App.css";
import UserDetails from "./component/UserDetails";
import RegForm from "./component/RegForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alert from "./component/Alert";
import axios from "axios";
import API_LINKS from "./constants/ApiConstants"

function App() {
  const [allUsers, setAllUsers] = useState([]);
  // For Alert
  const [showAlert, setShowAlert] = useState(false);
  const [myAlert, setMyAlert] = useState({
    type: "",
    message: "",
    closeButton: false,
  });
  const Load = async () => {
    const result = await axios.get(API_LINKS.GET_API_LINK_WITH_PAGINATION + "0/10");
    if (result !== undefined) setAllUsers(result.data.content);
  };
  // Alert
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserDetails
          allUsers={allUsers}
          setShowAlert={setShowAlert}
          setMyAlert={setMyAlert}
          Load={Load}
        />
      ),
    },
    {
      path: "/form",
      element: (
        <RegForm
          setShowAlert={setShowAlert}
          setMyAlert={setMyAlert}
          Load={Load}
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
