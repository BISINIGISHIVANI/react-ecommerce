import React from "react";
import "./cart.css";
import { productImg1, productImg2 } from "../../assets/images/photos";
import { CartAmount } from "./component/CartAmount";
import { CartItem } from "./component/CartItem";

export default function cart() {
  return (
    <div className="cart-container">
      <h2>your cart(2)</h2>
      <div className="cart">
        <div className="cart-content">
          <CartItem
            cartImg={productImg1}
            imgAlt={"product"}
            CartTitle={"Mast &Harbour"}
            CartSubtitle={"Women Blue Solid Bomber Jacket"}
            cartPrice={"2699"}
            cartDiscount={"50%"}
          />
          <CartItem
            cartImg={productImg2}
            imgAlt={"product"}
            CartTitle={"Mast &Harbour"}
            CartSubtitle={"Women yellow Solid Bomber Jacket"}
            cartPrice={"2699"}
            cartDiscount={"50%"}
          />
        </div>

        <div className="cart-footer">
          <h3>Price details</h3>
          <hr />
          <CartAmount numberItems={"2"} />
        </div>
      </div>
    </div>
  );
}
