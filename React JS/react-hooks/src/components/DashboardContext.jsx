import { createContext, useContext } from "react";

export const DashboardContext = createContext(undefined);

export const useUserContext = () => {
    const user = useContext(DashboardContext);
    if(user === undefined){
        throw new Error("useUserContext must be used with a Dashboard");
    }
    return user; 
}
