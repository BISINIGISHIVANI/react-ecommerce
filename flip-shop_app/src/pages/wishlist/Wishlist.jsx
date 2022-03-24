import React from "react";
import "./wishlist.css";
import { WishlistCard } from "./wishlist_card/Wishlistcard";
import { productImg1, productImg2 } from "../../assets/images/photos";
export default function Wishshlist() {
  return (
    <section className="products">
      <div className="section-title">
        <h2>My WishList</h2>
      </div>
      <div className="products-center">
        <WishlistCard
          productImg={productImg1}
          imgAlt={"product"}
          title={"Mast & Harbour"}
          description={"Women Blue Solid Bomber Jacket"}
          productPrice={"2699"}
        />
        <WishlistCard
          productImg={productImg2}
          imgAlt={"product"}
          title={"Mast & Harbour"}
          description={"Women Blue Solid Bomber Jacket"}
          productPrice={"2799"}
        />
      </div>
    </section>
  );
}
