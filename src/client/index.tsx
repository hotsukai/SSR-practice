import React from "react";
import ReactDOM from "react-dom";
import { IndexPage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const node = document.getElementById("root") as HTMLElement;
const data = node.dataset.react ? JSON.parse(node.dataset.react) : {};
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes>
      <Route
        path="/ssr"
        element={<IndexPage todos={data.todos} pagename={data.pagename} />}
      />
      <Route
        path="/ssg"
        element={<IndexPage todos={data.todos} pagename={data.pagename} />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
