import { ToDoItem } from "app";
import React, { VFC } from "react";

type Props = { item: ToDoItem };
const ToDoCard: VFC<Props> = ({ item }) => {
  return (
    <div
      style={{
        borderRadius: "4px",
        border: "1px solid black",
        padding: "1rem",
        margin: " 0.5rem 0",
      }}
    >
      <h2>{item.title}</h2>
      <p>{item.detail}</p>
    </div>
  );
};

export default ToDoCard;
