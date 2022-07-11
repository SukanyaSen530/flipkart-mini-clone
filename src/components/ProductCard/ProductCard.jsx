import "./product-card.scss";

const ProductCard = ({
  id,
  src,
  size,
  price,
  discount,
  idealFor,
  brand,
  name,
  color,
}) => {
  return (
    <article className="product-card">
      <img src={src} alt={id} />
      <i className="fa-solid fa-heart wishlist-heart"></i>

      <div className="product-card__content">
        <p className="product-card__content__brand">{brand}</p>
        <p className="small">{name}</p>
        <p className="product-card__content__price">
          {discount ? (
            <span className="product-price">
              ₹{parseInt(price - (price * discount) / 100)}
            </span>
          ) : null}
          <span className={`${discount ? "strike" : "product-price"}`}>
            ₹{price}
          </span>
          {discount && (
            <span className="product-discount">{discount}% off</span>
          )}
        </p>

        <p className="product-card__content__color">{color}</p>
        <p className="small">
          <span className="highlight">Size </span>
          {size}
        </p>
        <p className="small">
          <span className="highlight">Ideal </span> {idealFor}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
