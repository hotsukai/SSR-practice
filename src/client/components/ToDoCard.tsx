import { ToDoItem } from "app";
import React, { VFC } from "react";

type Props = { item: ToDoItem };
const ToDoCard: VFC<Props> = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.detail}</p>
    </div>
  );
};

export default ToDoCard;
