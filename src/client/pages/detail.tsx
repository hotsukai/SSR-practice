import React, { VFC } from "react";
import { ToDoItem } from "../../app";
import { Link } from "react-router-dom";
import ToDoCard from "../../client/components/ToDoCard";
import { buildTopPath } from "../../client/App";

export type DetailPageProps = {
  data: ToDoItem;
  isLoading: boolean;
};
const DetailPage: VFC<DetailPageProps> = ({ data, isLoading }) => {
  if (isLoading) return <p>loading detail page</p>;
  return (
    <div>
      <h1>Detail page</h1>
      <p>
        <Link to={buildTopPath()}>Top</Link>
      </p>
      <ToDoCard item={data} />
    </div>
  );
};

export default DetailPage;
