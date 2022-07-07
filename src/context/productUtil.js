const compose =
  (...fns) =>
  (state, data) =>
    fns.reduceRight((acc, curr) => curr(state, acc), data);

const filterData = ({ filter: { brand, size, gender } }, data) => {
  return (data || [])
    .filter((product) => product.size === size)
    .filter((product) => product.gender === gender)
    .filter((product) =>
      brand.length !== 0
        ? brand && brand.includes(product.brand.toLowerCase())
        : true
    );
};

const compareByDiscountPrice = (
  { discount: discountA, price: priceA },
  { discount: discountB, price: priceB }
) => {
  return (
    parseInt(priceB - (priceB * discountB || 0) / 100) -
    parseInt(priceA - (priceA * discountA || 0) / 100)
  );
};

const sortData = ({ filter: { sortPrice } }, data) => {
  if (sortPrice === "HIGH_TO_LOW|price") {
    return [...data].sort(compareByDiscountPrice);
  } else if (sortPrice === "LOW_TO_HIGH|price") {
    return [...data].sort(compareByDiscountPrice).reverse();
  } else return data;
};

export { compose, filterData, sortData };
