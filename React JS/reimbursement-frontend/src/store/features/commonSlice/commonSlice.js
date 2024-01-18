import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRole:"",
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    updateUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const commonReducer = commonSlice.reducer;
export const { updateUserRole } = commonSlice.actions;
