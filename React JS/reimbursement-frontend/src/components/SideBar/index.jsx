import React, { useEffect } from "react";
import "./SideBar.scss";
import HomeIcon from "@mui/icons-material/Home";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DescriptionIcon from "@mui/icons-material/Description";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserRole } from "../../store/features/commonSlice/commonSlice";
import { ADMIN, EMPLOYEE, MANAGER } from "../../constants/stringConstants";

const SideBar = () => {
  const userRole = useSelector((state) => state.common.userRole);
  const dispatch = useDispatch();
  useEffect(() => {
    const path = window.location.pathname;
    let role = "";
    if (path.includes("employee")) {
      role = EMPLOYEE;
    } else if (path.includes("manager")) {
      role = MANAGER;
    } else if (path.includes("admin")) {
      role = ADMIN;
    }
    dispatch(updateUserRole(role));
  }, []);
  console.log(userRole);
  return (
    <div className="SideBar">
      <img
        src="https://uploads-ssl.webflow.com/64d655209af30b2ac5ce111c/64d655209af30b2ac5ce1179_Divum_Logo.svg"
        alt="logo"
        className="logo"
      />
      <ul className="sidebar-items-wrapper">
        <NavLink className="sidebar-item" to="/employee/home">
          <HomeIcon className="sidebar-icon" />
          Home
        </NavLink>
        {userRole === ADMIN && (
          <>
            <NavLink className="sidebar-item" to="/admin/addVendor">
              <PersonAddIcon className="sidebar-icon" />
              Add Vendor
            </NavLink>
            <NavLink className="sidebar-item" to="/admin/purchaseOrder">
              <AddShoppingCartIcon className="sidebar-icon" />
              Purchase Order
            </NavLink>
            <NavLink className="sidebar-item" to="/admin/bills">
              <ReceiptLongIcon className="sidebar-icon" />
              Bills
            </NavLink>
            <NavLink className="sidebar-item" to="/admin/paymentMade">
              <AccountBalanceIcon className="sidebar-icon" />
              Payment Made
            </NavLink>
            <NavLink className="sidebar-item" to="/admin/recurringBills">
              <CurrencyExchangeIcon className="sidebar-icon" />
              Recurring Bills
            </NavLink>
          </>
        )}
        {userRole !== ADMIN && (
          <>
            <NavLink
              className="sidebar-item"
              to={
                userRole === EMPLOYEE
                  ? "/employee/employeeDraft"
                  : "/manager/.."
              }
            >
              <EditNoteIcon className="sidebar-icon" />
              Draft
            </NavLink>
            <NavLink className="sidebar-item" to="/employee/employeeInvoice">
              <DescriptionIcon className="sidebar-icon" />
              Invoice
            </NavLink>

            <NavLink
              className="sidebar-item"
              to="/employee/employeeExpenseClaim"
            >
              <CurrencyRupeeIcon className="sidebar-icon" />
              Expense Claim
            </NavLink>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
