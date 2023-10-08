import { BUY_CAKE } from "../cake/cakeTypes";
import { BUY_ICECREAM } from "./iceCreamTypes";

const initialIceCream = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams:
          state.numOfIceCreams != 0
            ? state.numOfIceCreams - 1
            : state.numOfIceCreams,
      };

    default:
        return state;
  }
};

export default iceCreamReducer;