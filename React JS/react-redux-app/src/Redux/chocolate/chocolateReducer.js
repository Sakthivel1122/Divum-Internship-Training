import { BUY_CHOCOLATE } from "./chocolateTypes";

const initialChocolate = {
  numOfChocolates: 5,
};
export const chocolateReducer = (state = initialChocolate, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolates:
          state.numOfChocolates == 0
            ? state.numOfChocolates
            : state.numOfChocolates - 1,
      };

    default:
      return state;
  }
};
