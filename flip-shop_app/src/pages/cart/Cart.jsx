import React ,{ useEffect } from "react";
import "./cart.css";
import NavBar from "../../components/navbar/navabar";
import { Link } from "react-router-dom";
import { CartAmount } from "./component/CartAmount";
import { CartItem } from "./component/CartItem";
import { useAuth,useCart,useWishList } from "../../hooks";
import {getCartItemService} from "../../services/cart-services/cart.service";
import { updateCartHandler,removeFromCartHandler,getCartBill,moveToWishlistHandler } from "../../hooks/utilis/index";
export default function cart() {
  const {authState}=useAuth();
  const {token}=authState;
  const {cartState:{cart},cartDispatch}=useCart();
  const {wishlistState,wishlistDispatch}=useWishList();
  const {wishlist}=wishlistState;
  const { cartQuantity,itemsPrice, totalPrice } = getCartBill(cart);
  const callUpdateCartHandler = (_id, actionType) => {
    updateCartHandler(_id, actionType, token, cartDispatch);
  }

  const callRemoveFromCartHandler = (_id) => {
    removeFromCartHandler(_id, token, cartDispatch)
  }
  const callMoveToWishlistHandler=(_id)=>{
    const item = cart.find(item => item._id === _id);
    moveToWishlistHandler(_id, item, wishlistDispatch, token, cartDispatch,wishlist)
  }
  const getCartItems = async () => {
    try {
      const response = await getCartItemService(token);
      if (response.status === 200) {
        cartDispatch({ type: "GET_CART_ITEM", payload: response.data.cart })
      } else {
        throw new Error();
      }
    }
    catch (error) {
      alert(error);
    }
  }
  useEffect(() => getCartItems(), []);

  return (
    <>
    <NavBar/>
    <div>
    {cart.length!== 0 ? (
      <div className="cart-container">
      {cart.length !==0 ? (<h2>your cart({cart.length})</h2>):null}
      <div className="cart">
        <div className="cart-content">
          {cart.map(({
            _id,
            image,
            name,
            subtitle,
            price,
            discount,
            qty
          })=>
          (<CartItem
          key={_id}
          cartId={_id}
          cartImg={image}
          cartName={name}
          CartSubtitle={subtitle}
          cartPrice={price}
          cartDiscount={discount}
          cartQuantity={qty}
          callupdateCartHandler={callUpdateCartHandler}
          callremoveFromCartHandler={callRemoveFromCartHandler}
          callMoveToWishlistHandler={callMoveToWishlistHandler}
          />
          ))}
        </div>
        <div className="cart-footer">
          <h3>Price details</h3>
          <hr />
            <CartAmount
            cartQuantity={cartQuantity}
            cartPrice={itemsPrice}
            cartDiscount={"10%"}
            cartDelivaryCharge={"100"}
            cartTotalPrice={totalPrice}
            />
        </div>
      </div>
    </div>
    ):(
      <div>
          <div className="empty-cart">
            <h2 className="padding-sm">Your Cart is Empty</h2>
            <Link to="/products">
            <button className="banner-btn1 cursor-pointer">shop now</button>
            </Link>
          </div>
    </div>
    ) }
   </div>
   </>
  );
}
