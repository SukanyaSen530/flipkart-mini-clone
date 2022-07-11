const compose =
  (...fns) =>
  (state, data) =>
    fns.reduceRight((acc, curr) => curr(state, acc), data);

const filterData = ({ filters: { brand, size, gender } }, data) => {
  // return (data || [])
  //   .filter((product) => product.size.includes(size))
  //   .filter((product) => product.gender.includes(gender))
  //   .filter((product) =>
  //     brand.length !== 0
  //       ? brand && brand.includes(product.brand.toLowerCase())
  //       : true
  //   );
  return data;
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

const sortData = ({ filters: { sortPrice } }, data) => {
  // if (sortPrice === "highToLow") {
  //   return [...data].sort(compareByDiscountPrice);
  // } else if (sortPrice === "lowToHigh") {
  //   return [...data].sort(compareByDiscountPrice).reverse();
  // } else

  return data;
};

export { compose, filterData, sortData };
