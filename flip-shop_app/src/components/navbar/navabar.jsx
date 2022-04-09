import "./navabar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/context/auth-context";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate=useNavigate();
const {authState,authDispatch}=useAuth()
const authName=authState.user;
const checkStatus=(authName)=>{
  return authName ? "Logout":"Login";
}
const logoutHandler = () => {
  navigate("/");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  authDispatch({ type: "LOGOUT" })
}
const userHandler = async (type) => {
  type === "Login" ? navigate("/login") : logoutHandler();
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
      <div className="login-btn">
        <button 
        onClick={()=>userHandler(checkStatus(authName))}
        className="login-site cursor-pointer"
        >
          {checkStatus(authName)}
        </button>
      </div>
      <div className="wish-list margin-edge-items flex-center">
      <Link to="/wishlist">
        <div className="wishlist-btn">
          <span className="nav-icon">
            <i className="fa-solid fa-heart"></i>
          </span>
          <div className="nav-wishlist-count wishlist-items">
            <span>0</span>
          </div>
        </div>
        </Link>
      </div>
      <div className="nav-cart-container  margin-edge-items">
        <div className="nav-cart-container  margin-edge-items">
          <div className="nav-center flex-center">
          <Link to="/cart">
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
            </Link>
            <span className="cart-name">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

