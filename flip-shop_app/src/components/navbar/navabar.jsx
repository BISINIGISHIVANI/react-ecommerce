import "./navabar.css";
export default function NavBar() {
  return (
    <nav className="docnav-bar flex-center">
      <div className="flex-center nav-title nav-rflex margin-edge-items cursor-pointer">
        <h1 className="title-firstword">
          Fly <span className="title-secondword">Buy</span>
        </h1>
      </div>
      <div className="flex-center">
        <input
          type="search"
          placeholder="search here..."
          className="border-searchbox search-input"
        />
        <button className="search-go border-searchbox cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="login-btn">
        <button className="login-site cursor-pointer">Login</button>
      </div>
      <div className="wish-list margin-edge-items flex-center">
        <div className="wishlist-btn">
          <span className="nav-icon">
            <i className="fa-solid fa-heart"></i>
          </span>
          <div className="nav-wishlist-count wishlist-items">
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="nav-cart-container  margin-edge-items">
        <div className="nav-cart-container  margin-edge-items">
          <div className="nav-center flex-center">
            <div
              className="cart-btn"
              onClick="location.href='/component/cart-management/cart.html'"
            >
              <span className="nav-icon">
                <i className="fa-brands fa-opencart"></i>
              </span>
              <div className="nav-cart-count cart-items">
                <span>0</span>
              </div>
            </div>
            <span className="cart-name">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

