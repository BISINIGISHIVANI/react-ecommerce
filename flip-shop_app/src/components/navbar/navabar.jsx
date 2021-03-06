import "./navabar.css";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { useAuth,useCart,useWishList ,useFillter} from "../../hooks";
export default function NavBar(search) {
  const {searchByName,setSearchByName}=search;
  const navigate=useNavigate();
  const location=useLocation();
const {authState:{token,user},authDispatch}=useAuth();
const {cartState:{cart},cartDispatch}=useCart();
const {wishlistState:{wishlist},wishlistDispatch}=useWishList();
const {dispatch}=useFillter();
const authName=user;
const checkStatus=(authName)=>{
  return authName ? "Logout":"Login";
}
const searchProduct=(e)=>{
  dispatch({type:"RESET",payload:{}})
  setSearchByName(e.target.value)
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
const routerHandler=(path)=>{
  navigate(path);
  if(!token){
    alert("kindly login to your account")
  }
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
      {location.pathname==="/products" ? (
        <div className="flex-center">
        <input
          type="search"
          placeholder="search here..."
          className="border-searchbox search-input"
          value={searchByName}
          onChange={searchProduct}
        />
        <button className="search-go border-searchbox cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      ):null}
      
      <div className="wish-list margin-edge-items flex-center">
      <Link to="/wishlist">
        <div className="wishlist-btn"
        onClick={()=>routerHandler("/wishlist")}
        >
          <span className="nav-icon">
            <i className="fa-solid fa-heart"></i>
          </span>
          <div className="nav-wishlist-count wishlist-items">
            <span>{wishlist.length}</span>
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
              onClick={()=>routerHandler("/cart")}
            >
              <span className="nav-icon">
                <i className="fa-brands fa-opencart"></i>
              </span>
              <div className="nav-cart-count cart-items">
                <span>{cart.length}</span>
              </div>
            </div>
            </Link>
            <span className="cart-name">Cart</span>
          </div>
        </div>
      </div>
      <div className="login-btn">
        <button 
        onClick={()=>userHandler(checkStatus(authName))}
        className="login-site cursor-pointer"
        >
          {checkStatus(authName)}
        </button>
      </div>
    </nav>
  );
}

