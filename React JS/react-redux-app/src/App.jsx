import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import ChocolateContainer from "./Components/ChocolateContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <NewCakeContainer/>
        <CakeContainer />
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <ChocolateContainer/>
        <ItemContainer cake={true}/>
        <ItemContainer cake={false}/> */}
        <UserContainer/>
      </Provider>
    </div>
  );
};

export default App;
