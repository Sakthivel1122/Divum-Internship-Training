import React from "react";
import { useUserContext } from "./DashboardContext";

const DemoComp2 = () => {
  const user = useUserContext();
  return <div>{user.name + " " + user.isSubscribed}</div>;
};

export default DemoComp2;
