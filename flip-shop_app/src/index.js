import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/context/product-context";
import { AuthProvider } from "./hooks/context/auth-context";
import { CartProvider } from "./hooks/context/cart-context";
import { WishListProvider } from "./hooks/context/wishlist-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <AuthProvider>
        <CartProvider>
        <WishListProvider>
        <FilterProvider>
        <App />
        </FilterProvider>
        </WishListProvider>
        </CartProvider>
        </AuthProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
