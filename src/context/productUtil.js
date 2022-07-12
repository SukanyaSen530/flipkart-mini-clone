const compose =
  (...fns) =>
  (state, data) =>
    fns.reduceRight((acc, curr) => curr(state, acc), data);

const filterData = ({ filters: { brands, sizes, genders } }, data) => {
  return (data || [])
    .filter((product) =>
      genders?.length > 0 ? genders.includes(product.idealFor) : true
    )
    .filter((product) =>
      sizes.length > 0
        ? product.size.some((size) => sizes.includes(size))
        : true
    )
    .filter((product) =>
      brands.length > 0 ? brands.includes(product.brand) : true
    );
};;

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
  if (sortPrice === "highToLow") {
    return [...data].sort(compareByDiscountPrice);
  } else if (sortPrice === "lowToHigh") {
    return [...data].sort(compareByDiscountPrice).reverse();
  } else return data;
};

export { compose, filterData, sortData };
