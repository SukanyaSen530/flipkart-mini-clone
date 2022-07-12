import { useState } from "react";
import { Accordian } from "../";
import { productConstants } from "../../context/productConstants";
import { useProductContext } from "../../context/ProductProvider";

import "./sidebar.scss";

const sizesArr = ["s", "m", "l", "xl", "xxl", "free"];
const genderArr = ["men", "women", "unisex"];

const Sidebar = () => {
  const [filterSelected, setFilterSelected] = useState([]);

  const {
    state: {
      products,
      filters: { brands, sizes, genders },
    },
    dispatch,
  } = useProductContext();

  const brandArr = [...new Set(products?.map((product) => product.brand))];

  const filterOperations = (filterBy) => {
    if (filterSelected.includes(filterBy)) {
      setFilterSelected((prevList) => prevList.filter((f) => f !== filterBy));
    } else {
      setFilterSelected((prevList) => [...prevList, filterBy]);
    }
  };

  console.log(filterSelected);

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header__main">
          <h3>Filters</h3>
          <button
            onClick={() => {
              dispatch({
                type: productConstants.CLEAR_FILTERS,
              });
              setFilterSelected([]);
            }}
            className="sidebar__header__clearbtn"
          >
            Clear All
          </button>
        </div>

        {filterSelected.length > 0 ? (
          <div className="sidebar__header__filters">
            {filterSelected?.map((f, index) => (
              <span key={`${f}-fil-side-${index}`}>{f}</span>
            ))}
          </div>
        ) : null}
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
                  filterOperations(gender);
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
                  filterOperations(size);
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
                  filterOperations(brandName);
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
