import React from "react";
import { Provider } from "react-redux";
// import store from "./redux/store";
import "./App.css";
// import CakeContainer from "./Components/CakeContainer";
// import HooksCakeContainer from "./Components/HooksCakeContainer";
// import IceCreamContainer from "./Components/IceCreamContainer";
// import ChocolateContainer from "./Components/ChocolateContainer";
// import NewCakeContainer from "./Components/NewCakeContainer";
// import ItemContainer from "./Components/ItemContainer";
// import UserContainer from "./Components/UserContainer";
import toolKitStore from "./redux-toolkit/app/store";
import ToolKitCake from "./Components/ToolKitCake";
import ToolKitIceCream from "./Components/ToolKitIceCream";
import ToolKitUsersList from "./Components/ToolKitUsersList";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
const App = () => {
  const persistor = persistStore(toolKitStore);
  return (
    <div className="App">
      {/* <Provider store={store}>
        <NewCakeContainer/>
        <CakeContainer />
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <ChocolateContainer/>
        <ItemContainer cake={true}/>
        <ItemContainer cake={false}/>
        <UserContainer/>
      </Provider> */}
      <Provider store={toolKitStore}>
        <PersistGate persistor={persistor}>
          <ToolKitCake />
          <ToolKitIceCream />
          <ToolKitUsersList />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
