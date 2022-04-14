const ProductsList = ({
    productFilterImg,
    imgAlt,
    title,
    productSubtitle,
    starRating,
    productPrice,
    productDiscount,
    productId,
    checkCartAction,
    checkCartHandler,
    checkWishlistAction,
    checkWishlistHandler
  }) => {
    return (
      <article className="single-product">
        <div className="img-container">
          <img src={productFilterImg} alt={imgAlt} className="product-img" />
          <button className="bag-btn"
          onClick={()=>checkCartHandler(productId)}
          >
            <i className="fas fa-shopping-cart"></i>
            {checkCartAction(productId)}
          </button>
          <button className="bag-wishlist"
          onClick={()=>checkWishlistHandler(productId)}
          >
            <i className="fa-solid fa-heart"></i>
            {checkWishlistAction(productId)}
          </button>
        </div>
        <h3>{title}</h3>
        <h5>
          {productSubtitle} <button className="rating-btn">{starRating} ★</button>
        </h5>
        <h4>Rs.{productPrice}</h4>
        <h4>{productDiscount} offer</h4>
      </article>
    );
  };
  export { ProductsList };
  