import React, { useEffect, useState } from "react";
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";
import { CountContext } from "./CountContext";
const MainComponent = () => {
  const [count, setCount] = useState(0);
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    setCnt(count);
  }, [count]);
  return (
    <div className="MainComponent">
      <label className="label-1">
        Count: <span>{count}</span>
      </label>
      <CountContext.Provider value={{ count, setCount }}>
        <div className="btn-flex">
          <ButtonOne />
          <ButtonTwo />
        </div>
      </CountContext.Provider>
      <label className="label-2">
        Reflecting count value using useEffect: <span>{count}</span>
      </label>
    </div>
  );
};

export default MainComponent;
