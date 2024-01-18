import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeLayout from "../layoutes/EmployeeLayout";
import EmployeeHome from "../pages/EmployeeHome";
import EmployeeDraft from "../pages/EmployeeDraft";
import EmployeeInvoice from "../pages/EmployeeInvoice";
import EmployeeExpenseClaim from "../pages/EmployeeExpenseClaim";
import AdminLayout from "../layoutes/AdminLayout";
import AddVendor from "../pages/AddVendor";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/employee" element={<EmployeeLayout />}>
        <Route path="home" element={<EmployeeHome />} />
        <Route path="employeeDraft" element={<EmployeeDraft />} />
        <Route path="employeeInvoice" element={<EmployeeInvoice />} />
        <Route path="employeeExpenseClaim" element={<EmployeeExpenseClaim />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route path="home" element={<EmployeeHome />} /> */}
        {/* <Route path="adminDraft" element={<EmployeeDraft />} /> */}
        <Route path="addVendor" element={<AddVendor />} />
        <Route path="adminInvoice" element={<EmployeeInvoice />} />
        <Route path="adminExpenseClaim" element={<EmployeeExpenseClaim />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
