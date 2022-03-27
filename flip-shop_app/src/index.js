import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/context/product-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <FilterProvider>
        <App />
        </FilterProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
