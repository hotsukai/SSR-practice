import ToDoList from "../components/ToDoList";
import React, { VFC } from "react";
import { ToDoItem } from "app";

type Props = { todos: ToDoItem[] };
export const IndexPage: VFC<Props> = ({ todos }) => (
  <div>
    <h1>index page</h1>
    <p>This page is root page. And this page is processed SSR.</p>
    <ToDoList initItems={todos} />
  </div>
);
