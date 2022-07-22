import React, { createContext, useState } from "react";

const CurrentPagesContext = createContext();

export function CurrentPagesContextProvider({ children }) {
  const [pres, setPres] = useState([]);
  const [count, setCount] = useState(1);

  return (
    <CurrentPagesContext.Provider
      value={{
        pres,
        setPres,
        count,
        setCount,
      }}
    >
      {children}
    </CurrentPagesContext.Provider>
  );
}

export default CurrentPagesContext;
