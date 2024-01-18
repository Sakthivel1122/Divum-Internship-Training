import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../features/adminSlice/adminSlice";
import { commonReducer } from "../features/commonSlice/commonSlice";

const rootReducer = combineReducers({
  admin: adminReducer,
  common: commonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
