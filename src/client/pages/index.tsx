import ToDoList from "../components/ToDoList";
import React, { VFC } from "react";
import { ToDoItem } from "app";
import { Link } from "react-router-dom";

export type IndexPageProps = { todos: ToDoItem[]; pagename: string };
export const IndexPage: VFC<IndexPageProps> = ({ todos, pagename }) => (
  <div>
    <h1>index page ({pagename})</h1>
    <p>This page is root page. And this page is processed {pagename}.</p>
    <p>
      <Link to="/ssr">SSR</Link>
    </p>
    <p>
      <Link to="/ssg">SSG</Link>
    </p>
    <ToDoList initItems={todos} />
  </div>
);
