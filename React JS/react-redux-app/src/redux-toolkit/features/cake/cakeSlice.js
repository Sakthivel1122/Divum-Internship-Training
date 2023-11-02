import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

// module.exports = cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;

// export default cakeSlice.reducer;
// export const cakeActions = cakeSlice.actions

export const cakeReducer = cakeSlice.reducer;

export const { ordered: cakeOrdered, restocked: cakeRestocked } = cakeSlice.actions;
