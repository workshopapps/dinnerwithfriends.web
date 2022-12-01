import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CatchUpEventContextProvider } from "./context/CatchUpEventContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<CatchUpEventContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</CatchUpEventContextProvider>
);

