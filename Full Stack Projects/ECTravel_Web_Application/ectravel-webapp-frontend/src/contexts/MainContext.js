import { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext(null);

export const MainProvider = ({ children }) => {
  const [loginDetails, setLogInDetails] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem("loginDetails"));
    return localValue ? localValue : { emailId: null, isLoggedIn: false };
  });
  const [myAlertBox, setMyAlertBox] = useState({
    visible: false,
    type: null,
    message: null,
    closeBtn: null,
  });
  const handleSetLogInDetails = (value) => {
    setLogInDetails(value);
  };
  const handleSetMyAlertBox = (value) => {
    setMyAlertBox(value);
  };

  // UseEffect to handle localStorage
  useEffect(() => {
    localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
  }, [loginDetails]);

  return (
    <MainContext.Provider
      value={{
        loginDetails,
        handleSetLogInDetails,
        myAlertBox,
        handleSetMyAlertBox,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
  return useContext(MainContext);
};

/*

mainContext.handleSetMyAlertBox({
      visible: true,
      message: "Log in successfull",
      type:"success",
    })

*/
