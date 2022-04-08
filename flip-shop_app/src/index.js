import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/context/product-context";
import { AuthProvider } from "./hooks/context/auth-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <AuthProvider>
        <FilterProvider>
        <App />
        </FilterProvider>
        </AuthProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
