import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import { cakeReducer } from "../features/cake/cakeSlice";
import { iceCreamReducer } from "../features/iceCream/iceCreamSlice";
import { userReducer } from "../features/user/userSlice";

// import { storage } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
const persistConfig = {
  key: "root",
  version: "1",
  storage,
};

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
// const logger = reduxLogger.createLogger();
const toolKitStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default toolKitStore;
