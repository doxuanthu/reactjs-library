import React, { useReducer } from "react";
import { ShopContext } from "./contexts";
import reducer, { initState } from "./reducer";

function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ShopContext.Provider value={[state, dispatch]}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopProvider;
