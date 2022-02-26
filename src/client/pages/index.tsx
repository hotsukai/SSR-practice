import ToDoList from "../components/ToDoList";
import React, { useEffect, useRef, useState, VFC } from "react";
import { ToDoItem } from "app";
import { isBrowser } from "utils";

export type IndexPageProps = {
  data: ToDoItem[];
  isLoading: boolean;
};
export const IndexPage: VFC<IndexPageProps> = ({ data, isLoading }) => {
  if (isLoading) return <p>loading Index Page</p>;
  return (
    <div>
      <h1>index page</h1>
      <ToDoList initItems={data} />
    </div>
  );
};
