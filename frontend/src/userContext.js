import React, { createContext} from "react";

const userContext = createContext({});

export function userContextProvider({children}){
    return(
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
    )
}