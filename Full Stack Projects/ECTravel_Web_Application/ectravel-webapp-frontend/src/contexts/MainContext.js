import { createContext, useContext, useState } from "react";

const MainContext = createContext(null);

export const MainProvider = ({ children }) => {
  const [navBar, setNavBar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");
  const setLogInStatus = (state) => {
    setIsLoggedIn(state);
  };
  const handleLoggedUser = (user) => {
    setLoggedUser(user);
  };
  const setNavBarVisiblity = (state) => {
    setNavBar(state);
  };

  return (
    <MainContext.Provider
      value={{
        navBar,
        isLoggedIn,
        loggedUser,
        setLogInStatus,
        handleLoggedUser,
        setNavBarVisiblity,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
    return useContext(MainContext);
}