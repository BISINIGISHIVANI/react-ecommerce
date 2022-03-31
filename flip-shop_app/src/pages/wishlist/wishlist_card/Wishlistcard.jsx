const WishlistCard = ({
    productId,
    productImg,
    imgAlt,
    title,
    description,
    productPrice,
    callRemoveProductFromWishlist
  }) => {
    return (
      <article className="product">
        <div className="img-container">
          <img src={productImg} alt={imgAlt} className="product-img" />
          <button className="bag-wishlist" onClick={()=>callRemoveProductFromWishlist(productId)}>
            <i className="fa-solid fa-heart"></i>
            remove wishlist
          </button>
          <button className="bag-btn">
            <i className="fas fa-shopping-cart"></i>
            move to cart
          </button>
        </div>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <h4>Rs.{productPrice}</h4>
      </article>
    );
  };
  export { WishlistCard };
  