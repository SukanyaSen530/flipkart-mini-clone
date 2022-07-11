import { productConstants } from "../../context/productConstants";
import { useProductContext } from "../../context/ProductProvider";

import "./sort-header.scss";

const SortHeader = () => {
  const {
    state: {
      filters: { sortPrice },
    },
    dispatch,
  } = useProductContext();

  return (
    <div className="sort-header">
      <span>Sort By</span>
      <span
        className={`${sortPrice === "lowToHigh" ? "active" : ""}`}
        onClick={() =>
          dispatch({
            type: productConstants.SORT_BY_PRICE,
            payload: "lowToHigh",
          })
        }
      >
        Price -- Low To High
      </span>
      <span
        className={`${sortPrice === "highToLow" ? "active" : ""}`}
        onClick={() =>
          dispatch({
            type: productConstants.SORT_BY_PRICE,
            payload: "highToLow",
          })
        }
      >
        Price -- High To Low
      </span>
    </div>
  );
};

export default SortHeader;
