import { createContext, useContext, useReducer } from "react";
import { initialState, productReducer } from "./productReducer";
import { compose, filterData, sortData } from "./productUtil";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const filteredProducts = compose(filterData, sortData)(
    state,
    state.products || []
  );

  return (
    <productContext.Provider
      value={{ state, dispatch, finalProducts: filteredProducts }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProductContext = () => useContext(productContext);

export { useProductContext, ProductProvider };
