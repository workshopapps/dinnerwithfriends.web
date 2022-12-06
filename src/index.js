/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CatchUpEventContextProvider } from "./context/CatchUpEventContext";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://44b648d0f8594c1c87c49a3b276a3820@o4504278645866496.ingest.sentry.io/4504279888429056",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CatchUpEventContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CatchUpEventContextProvider>
);
