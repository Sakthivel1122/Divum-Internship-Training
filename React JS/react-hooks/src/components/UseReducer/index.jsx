import React, { useReducer } from "react";
import "./UseReducer.css";

const reducer = (state, action) => {
  const { type } = action;
  let newCount, hasError;
  switch (type) {
    case "Increment":
      newCount = state.count + 1;
      hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Max Reached" : null,
      };
    case "Decrement":
      newCount = state.count - 1;
      hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Min Reached" : null,
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <div className="UseReducer">
      <h1>UseReducer HOOKS</h1>
      <h2>
        {state.count}
        <br />
      </h2>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
      <p>{state.error}</p>
    </div>
  );
};

export default UseReducer;
