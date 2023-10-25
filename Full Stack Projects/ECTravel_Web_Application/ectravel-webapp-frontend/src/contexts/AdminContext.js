import { createContext, useContext, useState } from "react";

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [popUp, setPopUp] = useState({
    addBusPopUp: {
      visible: false,
      details: null,
    },
  });
  const [busList, setBusList] = useState([]);
  const handleSetPopUp = (value) => {
    setPopUp(value);
  };
  const handleSetBusList = (value) => {
    setBusList(value);
  };
  return (
    <AdminContext.Provider
      value={{ popUp, handleSetPopUp, busList, handleSetBusList }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  return useContext(AdminContext);
};
