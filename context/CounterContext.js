import React, { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({children}) => {

    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{counter,setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}

export { CounterContext, CounterProvider }