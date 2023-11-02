import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeOrdered, cakeReducer, cakeRestocked } from "../../redux-toolkit/features/cake/cakeSlice";

const ToolKitCake = () => {
  const cakeCount = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const handleOrderCake = () => {
    dispatch(cakeOrdered());
  };
  const handleRestockCake = () => {
    dispatch(cakeRestocked(2));
  }
  return (
    <div className="ToolKitCake">
      <h2>Number of cake - {cakeCount}</h2>
      <button onClick={handleOrderCake}>Order Cake</button>
      <button onClick={handleRestockCake}>Restock Cake</button>
    </div>
  );
};

export default ToolKitCake;
