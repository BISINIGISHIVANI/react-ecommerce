const CartItem = ({
    cartImg,
    imgAlt,
    CartTitle,
    CartSubtitle,
    cartPrice,
    cartDiscount
  }) => (
    <>
      <div className="cart-item">
        <img src={cartImg} alt={imgAlt} />
        <div>
          <h3>{CartTitle}</h3>
          <h5>{CartSubtitle}</h5>
          <h4>
            Rs.{cartPrice}
            <span>
              <del>
                <small>Rs.3600</small>
              </del>
            </span>
          </h4>
          <div className="percent">
            <span>{cartDiscount} off</span>
          </div>
          <div className="btn-yourcart">
            <button className="remove-cart-btn">remove from cart</button>
            <button className="move-wishlist-btn">move to wishlist</button>
          </div>
        </div>
        <div>
          <span className="increment">+</span>
          <p className="item-amount">1</p>
          <span className="decrement">─</span>
        </div>
      </div>
    </>
  );
  export { CartItem };
  