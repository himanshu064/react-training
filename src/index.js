import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ShortenUrlProvider } from "react-shorten-url";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShortenUrlProvider
      config={{ accessToken: "bccae27feeaaa6c05d35322e81b7cd1f25211349" }}
    >
      <App />
    </ShortenUrlProvider>
  </React.StrictMode>
);
