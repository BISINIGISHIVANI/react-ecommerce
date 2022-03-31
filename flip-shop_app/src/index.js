import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/context/product-context";
import { WishlistProvider } from "./hooks/context/wishlist-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <WishlistProvider>
        <FilterProvider>
        <App />
        </FilterProvider>
        </WishlistProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
