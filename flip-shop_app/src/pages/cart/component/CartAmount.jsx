const CartAmount = ({ numberItems }) => {
    return (
      <>
        <div className="price-data">
          <div>
            <span>Price({numberItems} items)</span>
            <span>Rs.4699</span>
          </div>
          <div>
            <span>Disount</span>
            <span>Rs.-1999</span>
          </div>
          <div>
            <span>Delivery Charges</span>
            <span>Rs.499</span>
          </div>
        </div>
        <hr />
        <h3>
          your total :Rs.<span className="cart-total">5198</span>
        </h3>
        <hr />
        <p className="savings">you will save Rs.1999 on this order</p>
        <button className="clear-cart banner-btn1">clear cart</button>
        <button className="place-order banner-btn1">place-order</button>
      </>
    );
  };
  export { CartAmount };
  