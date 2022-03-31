import "./navabar.css";
import { Link ,useNavigate} from "react-router-dom";
import { useWishlist } from "../../hooks/context/wishlist-context";
export default function NavBar() {
  const navigate = useNavigate();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const wishlist = wishlistState.wishlist;
  const wishlistHandler=()=>{
    navigate("/wishlist")
  }
  return (
    <nav className="docnav-bar flex-center">
      <div className="flex-center nav-title nav-rflex margin-edge-items cursor-pointer">
      <Link to="/">
        <h1 className="title-firstword">
          Fly <span className="title-secondword">Buy</span>
        </h1>
        </Link>
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
      <Link to="/login">
      <div className="login-btn">
        <button className="login-site cursor-pointer">Login</button>
      </div>
      </Link>
      <div className="wish-list margin-edge-items flex-center">
        <div className="wishlist-btn"onClick={wishlistHandler}>
          <span className="nav-icon">
            <i className="fa-solid fa-heart"></i>
          </span>
          <div className="nav-wishlist-count wishlist-items">
            {wishlist.length!==0 ?<span>{wishlist.length}</span>  : null}
          </div>
        </div>
      </div>
      <div className="nav-cart-container  margin-edge-items">
        <div className="nav-cart-container  margin-edge-items">
          <div className="nav-center flex-center">
          <Link to="/cart">
            <div
              className="cart-btn"
            >
              <span className="nav-icon">
                <i className="fa-brands fa-opencart"></i>
              </span>
              <div className="nav-cart-count cart-items">
                <span>0</span>
              </div>
            </div>
            </Link>
            <span className="cart-name">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

