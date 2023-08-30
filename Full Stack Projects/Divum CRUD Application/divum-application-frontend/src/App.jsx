import { useState } from "react";
import "./App.css";
import EmployeeDetails from "./component/EmployeeDetails";
import RegForm from "./component/RegForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <EmployeeDetails value={value} setValue={setValue} employee={employee} setEmployee={setEmployee}/>,
    },
    {
      path: "/form",
      element: <RegForm value={value} setValue={setValue} employee={employee} setEmployee={setEmployee}/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer
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
      />
    </div>
  );
}

export default App;
