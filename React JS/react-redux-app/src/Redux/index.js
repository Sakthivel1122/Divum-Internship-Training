// Redux is a library for JavaScript applications
// It is used for managing states in our JS application
// It is predictable
// To use Redux with React we use react-redux library

// import redux from "redux";
const redux = require("redux");

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
// Action creator function
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};
const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
};

// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
};

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCream: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
// const store = createStore(reducer);
const store = createStore(rootReducer);
console.log("Initial State", store.getState());

// Listener
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
