import ToDoList from "../components/ToDoList";
import React, { VFC } from "react";

export const IndexPage: VFC = () => (
  <div>
    <h1>index page</h1>
    <p>This page is root page. And this page is processed SSR.</p>
    <ToDoList />
  </div>
);
