import { createContext, useContext, useEffect, useRef, useState } from "react";

const MainContext = createContext(null);

export const MainProvider = ({ children }) => {
  const [idImgSrc,setIdImgSrc] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem("idImgSrc"));
    return localValue ? localValue : null;
  });

  const handleSetIdImgSrc = (value) => {
    setIdImgSrc(value);
  }
  useEffect(() => {
    localStorage.setItem("idImgSrc", JSON.stringify(idImgSrc));
  }, [idImgSrc]);

  return (
    <MainContext.Provider
      value={{
        idImgSrc,
        handleSetIdImgSrc
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
  return useContext(MainContext);
};
