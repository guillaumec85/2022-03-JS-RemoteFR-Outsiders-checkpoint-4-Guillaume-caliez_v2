import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { CurrentPagesContextProvider } from "./PagesContexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrentPagesContextProvider>
    <App />
  </CurrentPagesContextProvider>
);
