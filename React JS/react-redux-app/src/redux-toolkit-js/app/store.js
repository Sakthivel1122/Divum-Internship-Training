const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreameReducer = require("../features/iceCream/iceCreamSlice");
const { userReducer } = require("../features/user/userSlice");
// const userReducer = require("../features/user/userSlice")
const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreameReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
  
});

module.exports = store;
