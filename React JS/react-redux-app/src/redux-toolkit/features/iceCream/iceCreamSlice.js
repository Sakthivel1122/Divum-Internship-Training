import { createSlice } from "@reduxjs/toolkit";
import { cakeOrdered } from "../cake/cakeSlice";
// const { cakeActions } = require("../cake/cakeSlice");
const initialState = {
  numberOfIceCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  // extraReducers: {
  //     ['cake/ordered'] : (state) => {
  //         state.numberOfIceCreams--;
  //     }
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIceCreams--;
    });
  },
});

// module.exports = iceCreamSlice.reducer;
// module.exports.iceCreamActions = iceCreamSlice.actions;

export const { actions: iceCreamActions, reducer: iceCreamReducer } = iceCreamSlice;

export const { ordered: iceCreamOrdered, restocked: iceCreamRestocked } = iceCreamSlice.actions;
