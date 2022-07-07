import { createContext, useContext, useReducer } from "react";
import { initialState, productReducer } from "./productReducer";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState, productReducer);

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

const useProducts = () => useContext(productContext);

export { useProducts, ProductProvider };
