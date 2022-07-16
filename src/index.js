import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { ShopProvider } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <ShopProvider>
        <App />
      </ShopProvider>
    </GlobalStyle>
  </React.StrictMode>
);
