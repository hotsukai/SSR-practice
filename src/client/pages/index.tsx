import ToDoList from "../components/ToDoList";
import React, { useEffect, useRef, useState, VFC } from "react";
import { ToDoItem } from "app";
import { isBrowser } from "utils";

export type IndexPageProps = {
  data?: ToDoItem[];
  fetchInitData?: any;
};
export const IndexPage: VFC<IndexPageProps> = ({ data, fetchInitData }) => {
  const [todos, setTodos] = useState(() => {
    if (typeof document !== "undefined") {
      const dataPool = (document.getElementById("root") as HTMLElement).dataset
        .react;
      const unsafeData = dataPool ? (JSON.parse(dataPool) as ToDoItem[]) : null;
      (document.getElementById("root") as HTMLElement).dataset.react = "";
      return unsafeData;
    } else {
      return data; // SSRしてる時
    }
  });
  console.log(JSON.stringify(data), JSON.stringify(todos));

  const [loading, setLoading] = useState(todos ? false : true);

  const shouldFetch = useRef(!todos);

  useEffect(() => {
    const f = async () => {
      if (shouldFetch.current) {
        setLoading(true);
        const _todos = await fetchInitData();
        setTodos(_todos);
        setLoading(false);
      }
    };
    f();
  }, []);
  if (loading) return <p>loading</p>;
  return (
    <div>
      <h1>index page</h1>
      <ToDoList initItems={todos} />
    </div>
  );
};
