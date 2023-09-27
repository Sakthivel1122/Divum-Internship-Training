import React from "react";

const isAuthenticated = true;
const WithAuthentication = (Component) => {
  return function () {
    if(!isAuthenticated){
        return <div>User Not Authenticated</div>
    }
    return <Component/>
  };
};

export default WithAuthentication;
