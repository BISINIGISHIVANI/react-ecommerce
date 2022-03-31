import React from "react";
import "./wishlist.css";
import { WishlistCard } from "./wishlist_card/Wishlistcard";
import {useWishlist} from "../../hooks/context/wishlist-context";
import {getWishlistItemsHandler,removeFromWishlistHandler} from "../../hooks/utilis/index";
export default function Wishshlist() {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  
  const callRemoveProductFromWishlist=(_id)=>{
    removeFromWishlistHandler(_id, token, wishlistDispatch)
  }
  

  useEffect(() => getWishlistItemsHandler( token, wishlistDispatch), [])
  return (
    <section className="products">
      <div className="section-title">
        <h2>My WishList ({wishlist.length})</h2>
      </div>
      {wishlist.length !==0 ? 
      <div className="products-center">
      {wishlist.map (product=>{
         <WishlistCard
         key={product._id}
         productImg={product.image}
         imgAlt={"product"}
         title={product.name}
         description={product.subtitle}
         productPrice={product.price}
         callRemoveProductFromWishlist={callRemoveProductFromWishlist}
         />
      })}
     </div>
     :
     <div>
       <Link to='/products'>
         <h2>your wishlist is Empty</h2>
       <button className="banner-btn1">Shop now</button>
       </Link>
     </div>
      }
      
    </section>
  );
}
