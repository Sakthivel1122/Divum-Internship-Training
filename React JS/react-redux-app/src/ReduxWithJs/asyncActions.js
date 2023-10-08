const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

// Middleware
const thunkMiddleware = require("redux-thunk").default;

const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const ACTIONS = {
  FETCH_USERS_REQUEST: "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE: "FETCH_USERS_FAILURE",
};

const actionCreator = {
  fetchUsersRequest: function () {
    return {
      type: ACTIONS.FETCH_USERS_REQUEST,
    };
  },
  fetchUsersSuccess: function (users) {
    return {
      type: ACTIONS.FETCH_USERS_SUCCESS,
      payload: users,
    };
  },
  fetchUsersFailure: function (error) {
    return {
      type: ACTIONS.FETCH_USERS_FAILURE,
      payload: error,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case ACTIONS.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      break;
  }
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(actionCreator.fetchUsersRequest());
    axios 
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data
        const users = response.data.map((user) => user.id);
        dispatch(actionCreator.fetchUsersSuccess(users));
      })
      .catch((error) => {
        //error.message
        dispatch(actionCreator.fetchUsersFailure(error.message));
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUsers());
