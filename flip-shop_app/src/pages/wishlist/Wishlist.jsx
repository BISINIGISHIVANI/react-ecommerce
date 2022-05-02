import React,{useEffect} from "react";
import "./wishlist.css";
import NavBar from "../../components/navbar/navabar";
import { WishlistCard } from "./wishlist_card/Wishlistcard";
import { useAuth,useCart,useWishList } from "../../hooks";
import { moveToCartandler,getWishlistItemsHandler,removeFromWishlistHandler } from "../../hooks/utilis";
export default function Wishshlist() {
  const {authState}=useAuth();
  const {token}=authState;
  const {cartState,cartDispatch}=useCart();
  const {wishlistState,wishlistDispatch}=useWishList();
  const {wishlist}=wishlistState;
  const callRemoveFromWishlistHandler=(_id)=>{
    removeFromWishlistHandler(_id,token,wishlistDispatch)
  }
  const callMoveToCartHandler=(_id)=>{
    const item = wishlist.find( item=> item._id === _id )
    moveToCartandler(_id, item, token, cartState, cartDispatch)
  }
  useEffect(() =>getWishlistItemsHandler(token,wishlistDispatch),[]);
  return (
    <>
    <NavBar />
    <section className="products">
      <div className="section-title">
        <h2>My WishList ({wishlist.length})</h2>
      </div>
      <div className="products-center">
        {wishlist.map(({
           _id,
            image,
            name,
            subtitle,
            price,
        })=>(
          <WishlistCard
          className={`${wishlist.length===1 ? "product1" : "product"}`}
          key={_id}
          productId={_id}
          productImg={image}
          imgAlt={"product"}
          title={name}
          description={subtitle}
          productPrice={price}
          callRemoveFromWishlistHandler={callRemoveFromWishlistHandler}
          callMoveToCartHandler={callMoveToCartHandler}
        />
        ))}
        </div>
    </section>
    </>
  );
}
