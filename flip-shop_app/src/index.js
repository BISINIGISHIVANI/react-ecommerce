import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/context/product-context";
import { AuthProvider } from "./hooks/context/auth-context";
import { CartProvider } from "./hooks/context/cart-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <AuthProvider>
        <CartProvider>
        <FilterProvider>
        <App />
        </FilterProvider>
        </CartProvider>
        </AuthProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
