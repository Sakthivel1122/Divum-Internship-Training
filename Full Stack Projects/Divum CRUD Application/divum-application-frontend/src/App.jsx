import { useState } from "react";
import "./App.css";
import EmployeeDetails from "./component/EmployeeDetails";
import RegForm from "./component/RegForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alert from "./component/Alert";
import axios from "axios";

const API_LINK = "http://localhost:8088/api/v1/employee/";
function App() {
  const [employee, setEmployee] = useState([]);
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
      API_LINK + "getEmployeeWithPaginationAndSorting/0/10"
    );
    if(result != undefined)
    setEmployee(result.data.content);
  };
  // Alert
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <EmployeeDetails
          employee={employee}
          setEmployee={setEmployee}
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
          employee={employee}
          setEmployee={setEmployee}
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
