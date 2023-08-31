import { useState } from "react";
import "./App.css";
import EmployeeDetails from "./component/EmployeeDetails";
import RegForm from "./component/RegForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeletePopUp from "./component/DeletePopUp";
import Alert from "./component/Alert";
function App() {
  const [employee, setEmployee] = useState([]);
  const [value, setValue] = useState({
    employeeId: "",
    emailId: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobileNo: "",
    address: "",
  });
  // For Alert
  // showAlert, setShowAlert, myAlert, setMyAlert
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
        <EmployeeDetails
          value={value}
          setValue={setValue}
          employee={employee}
          setEmployee={setEmployee}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          myAlert={myAlert}
          setMyAlert={setMyAlert}
        />
      ),
    },
    {
      path: "/form",
      element: (
        <RegForm
          value={value}
          setValue={setValue}
          employee={employee}
          setEmployee={setEmployee}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          myAlert={myAlert}
          setMyAlert={setMyAlert}
        />
      ),
    },
  ]);
  return (
      <div className="App">
        <RouterProvider router={router} />
        {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        /> */}
        {showAlert && (
          <Alert
            type={myAlert.type}
            message={myAlert.message}
            closeButton={myAlert.closeButton}
            setShowAlert={setShowAlert}
          />
        )}
        {/* {true && (
          <Alert
            type="success"
            message="Message"
            closeButton={true}
            setShowAlert={setShowAlert}
          />
        )} */}
      </div>
  );
}

export default App;
