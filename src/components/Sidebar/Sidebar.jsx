import { Accordian } from "../";
import { productConstants } from "../../context/productConstants";
import { useProductContext } from "../../context/ProductProvider";

import "./sidebar.scss";

const sizesArr = ["s", "m", "l", "xl", "xxl", "free"];
const genderArr = ["men", "women", "unisex"];

const Sidebar = () => {
  const {
    state: {
      products,
      filters: { brands, sizes, genders },
    },
    dispatch,
  } = useProductContext();

  const brandArr = [...new Set(products?.map((product) => product.brand))];

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h3>Filters</h3>
        <button
          onClick={() =>
            dispatch({
              type: productConstants.CLEAR_FILTERS,
            })
          }
        >
          Clear Filters
        </button>
      </div>
      <div className="sidebar__body">
        <Accordian title="gender">
          {genderArr?.map((gender, index) => (
            <div key={`${index}-g-${gender}`} className="checkboxes">
              <input
                type="checkbox"
                id={gender}
                name={gender}
                checked={genders.includes(gender)}
                onChange={() => {
                  dispatch({
                    type: productConstants.FILTER_BY_GENDER,
                    payload: gender,
                  });
                }}
              />
              <label htmlFor={gender}>{gender}</label>
            </div>
          ))}
        </Accordian>
        <Accordian title="size">
          {sizesArr?.map((size, index) => (
            <div key={`${index}-s-${size}`} className="checkboxes">
              <input
                type="checkbox"
                id={size}
                name={size}
                checked={sizes.includes(size)}
                onChange={() => {
                  dispatch({
                    type: productConstants.FILTER_BY_SIZE,
                    payload: size,
                  });
                }}
              />
              <label>{size}</label>
            </div>
          ))}
        </Accordian>
        <Accordian title="brand">
          {brandArr?.map((brandName, index) => (
            <div key={`${index}-b-${brandName}`} className="checkboxes">
              <input
                type="checkbox"
                id={brandName}
                name={brandName}
                checked={brands.includes(brandName)}
                onChange={() => {
                  dispatch({
                    type: productConstants.FILTER_BY_BRAND,
                    payload: brandName,
                  });
                }}
              />
              <label>{brandName}</label>
            </div>
          ))}
        </Accordian>
      </div>
    </aside>
  );
};

export default Sidebar;
