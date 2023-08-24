import React, { useState } from "react";
import { DashboardContext } from "./DashboardContext";
import DemoComp1 from "./DemoComp1";
import DemoComp2 from "./DemoComp2";
const App2 = () => {
  const [user] = useState({
    isSubscribed: true,
    name: "User name",
  });
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <DemoComp1 />
        <DemoComp2 />
      </DashboardContext.Provider>
    </div>
  );
};

export default App2;
