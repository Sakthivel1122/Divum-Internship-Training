import { useState } from "react";
import "./App.css";
import UserDetails from "./component/UserDetails";
import RegForm from "./component/RegForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alert from "./component/Alert";
import axios from "axios";

const API_LINK = "http://localhost:8088/api/v1/user/";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  // For Alert
  // showAlert, setShowAlert, myAlert, setMyAlert
  const [showAlert, setShowAlert] = useState(false);
  const [myAlert, setMyAlert] = useState({
    type: "",
    message: "",
    closeButton: false,
  });
  const Load = async () => {
    const result = await axios.get(
      API_LINK + "getUserWithPaginationAndSorting/0/10"
    );
    if (result != undefined) setAllUsers(result.data.content);
  };
  // Alert
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserDetails
        allUsers={allUsers}
        setAllUsers={setAllUsers}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          myAlert={myAlert}
          setMyAlert={setMyAlert}
          Load={Load}
        />
      ),
    },
    {
      path: "/form",
      element: (
        <RegForm
        allUsers={allUsers}
        setAllUsers={setAllUsers}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          myAlert={myAlert}
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
