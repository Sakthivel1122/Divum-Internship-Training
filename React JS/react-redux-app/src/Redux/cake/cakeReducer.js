import { BUY_CAKE, BUY_NO_OF_CAKE } from "./cakeTypes";

const initialCake = {
  numberOfCakes: 10,
};
const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes:
          state.numberOfCakes === 0
            ? state.numberOfCakes
            : state.numberOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
