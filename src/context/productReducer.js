import { productConstants } from "./productConstants";
import productJson from "../data/db.json";

const initialState = {
  products: productJson.products,
  filters: {
    brand: "",
    sortPrice: "",
    size: "",
    gender: "",
  },
};

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case productConstants.FILTER_BY_BRAND:
      const payloadBrand = payload?.toLowerCase() || "";
      return {
        ...state,
        filters: {
          ...state.filters,
          brand: state.filters.brand.includes.payloadBrand
            ? state.filters.brand.filter((brand) => brand !== payloadBrand)
            : [...state.filters.brand, payloadBrand],
        },
      };
    case productConstants.FILTER_BY_GENDER:
      return { ...state, filters: { ...state.filters, gender: payload } };
    case productConstants.FILTER_BY_SIZE:
      return { ...state, filters: { ...state.filters, size: payload } };
    case productConstants.SORT_BY_PRICE:
      return { ...state, filters: { ...state.filters, sortPrice: payload } };
    case productConstants.CLEAR_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export { initialState, productReducer };
