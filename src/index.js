/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CatchUpEventContextProvider } from "./context/CatchUpEventContext";
import * as atatus from "atatus-js";
import { CookiesProvider } from "react-cookie";
atatus.config("3137ca1ae08b4d759cc186d69b5e42a0").install();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CatchUpEventContextProvider>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </CatchUpEventContextProvider>
);
