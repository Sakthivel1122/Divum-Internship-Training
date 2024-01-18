import React from "react";
import MainRoutes from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/app/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </div>
  );
};

export default App;
