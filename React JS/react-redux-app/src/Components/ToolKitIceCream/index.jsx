import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { iceCreamOrdered, iceCreamRestocked } from "../../redux-toolkit/features/iceCream/iceCreamSlice";

const ToolKitIceCream = () => {
  const iceCreamCount = useSelector((state) => state.iceCream.numberOfIceCreams);
  const dispatch = useDispatch();
  const handleOrderIceCream = () => {
    dispatch(iceCreamOrdered());
  }
  const handleRestockIceCream = () => {
    dispatch(iceCreamRestocked(2));
  }
  return (
    <div className="ToolKitIceCream">
      <h2>Number of IceCream -{iceCreamCount}</h2>
      <button onClick={handleOrderIceCream}>Order IceCream</button>
      <button onClick={handleRestockIceCream}>Restock IceCream</button>
    </div>
  );
};

export default ToolKitIceCream;

