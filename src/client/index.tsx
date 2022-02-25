import React from "react";
import ReactDOM from "react-dom";
import { IndexPage } from "./pages";

const node = document.getElementById("root") as HTMLElement;
const data = node.dataset.react ? JSON.parse(node.dataset.react) : {};
ReactDOM.hydrate(
  <IndexPage initItems={data.todos} />,
  document.getElementById("root")
);
