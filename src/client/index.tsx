import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as React from "react";
import ReactDOM from "react-dom";

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
