import { productConstants } from "./productConstants";
import productJson from "../data/db.json";

const initialState = {
  products: productJson.products,
  filters: {
    brands: [],
    sizes: [],
    genders: [],
    sortPrice: "",
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
          brands: state.filters.brands.includes(payloadBrand)
            ? state.filters.brands.filter((brand) => brand !== payloadBrand)
            : [...state.filters.brands, payloadBrand],
        },
      };

    case productConstants.FILTER_BY_SIZE:
      const payloadSize = payload?.toLowerCase() || "";
      return {
        ...state,
        filters: {
          ...state.filters,
          sizes: state.filters.sizes.includes(payloadSize)
            ? state.filters.sizes.filter((size) => size !== payloadSize)
            : [...state.filters.sizes, payloadSize],
        },
      };

    case productConstants.FILTER_BY_GENDER:
      const payloadGender = payload?.toLowerCase() || "";
      return {
        ...state,
        filters: {
          ...state.filters,
          genders: state.filters.genders.includes(payloadGender)
            ? state.filters.genders.filter((g) => g !== payloadGender)
            : [...state.filters.genders, payloadGender],
        },
      };
    case productConstants.SORT_BY_PRICE:
      return { ...state, filters: { ...state.filters, sortPrice: payload } };
    case productConstants.CLEAR_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export { initialState, productReducer };
