import { createContext, useContext } from "react";

export const CountContext = createContext(undefined);

export const useCountContext = () => {
    const val = useContext(CountContext);
    if(val === undefined){
        throw new Error("Error occured !!!");
    }
    return val;
}
