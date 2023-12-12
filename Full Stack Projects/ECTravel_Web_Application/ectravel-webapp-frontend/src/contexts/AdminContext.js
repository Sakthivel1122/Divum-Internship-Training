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
  const [trainList, setTrainList] = useState([]);
  const [trainFormPopUp, setTrainFormPopUp] = useState({
    visible: false,
    detais: null,
  });

  const [flightList, setFlightList] = useState([]);
  const [flightPopUp, setFlightPopUp] = useState({
    visible: false,
    data: null,
  });
  const handleSetPopUp = (value) => {
    setPopUp(value);
  };
  const handleSetBusList = (value) => {
    setBusList(value);
  };
  const handleSetTrainList = (value) => {
    setTrainList(value);
  };
  const handleSetTrainFormPopUp = (value) => {
    setTrainFormPopUp(value);
  };
  const handleSetFlightList = (value) => {
    setFlightList(value);
  };
  const handleSetFlightPopUp = (value) => {
    setFlightPopUp(value);
  };
  return (
    <AdminContext.Provider
      value={{
        popUp,
        handleSetPopUp,
        busList,
        handleSetBusList,
        trainList,
        handleSetTrainList,
        trainFormPopUp,
        handleSetTrainFormPopUp,
        flightList,
        handleSetFlightList,
        flightPopUp,
        handleSetFlightPopUp,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  return useContext(AdminContext);
};
