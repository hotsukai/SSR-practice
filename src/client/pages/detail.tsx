import React, { useEffect, useRef, useState, VFC } from "react";
import { ToDoItem } from "../../app";
import { Link, useParams } from "react-router-dom";
import ToDoCard from "../../client/components/ToDoCard";
import { buildTopPath } from "../../client/App";

export type DetailPageProps = {
  data?: ToDoItem;
  fetchInitData?: any;
};
const DetailPage: VFC<DetailPageProps> = ({ data, fetchInitData }) => {
  const [todo, setTodo] = useState(() => {
    if (typeof document !== "undefined") {
      const dataPool = (document.getElementById("root") as HTMLElement).dataset
        .react;
      const unsafeData = dataPool ? (JSON.parse(dataPool) as ToDoItem) : null;
      (document.getElementById("root") as HTMLElement).dataset.react = "";
      return unsafeData;
    } else {
      return data; // SSRしてる時
    }
  });
  console.log(JSON.stringify(data), JSON.stringify(todo));

  const [loading, setLoading] = useState(todo ? false : true);

  const { id } = useParams();
  const shouldFetch = useRef(!todo);

  useEffect(() => {
    if (shouldFetch.current) {
      console.log("start fetch", id);
      setLoading(true);
      fetchInitData("/ssr/" + id /* fixme */).then((todo) => {
        console.log("result", todo);

        setTodo(todo);
        setLoading(false);
      });
    }
  }, [id]);
  if (loading) return <p>loading</p>;
  if (todo)
    return (
      <div>
        <h1>Detail page</h1>
        <p>
          <Link to={buildTopPath()}>Top</Link>
        </p>
        <ToDoCard item={todo} />
      </div>
    );
  return <></>;
};

export default DetailPage;
