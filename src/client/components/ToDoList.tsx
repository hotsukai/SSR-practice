import { ToDoItem } from "../../app";
import { buildDetailPath } from "../../client/App";
import React, { useCallback, useState, VFC } from "react";
import { Link } from "react-router-dom";
import ToDoCard from "./ToDoCard";
import ToDoForm from "./ToDoForm";

type Props = { initItems?: ToDoItem[] };
const ToDoList: VFC<Props> = ({ initItems = [] }) => {
  const [todoList, setTodoList] = useState<ToDoItem[]>(initItems);
  const addItem = useCallback(
    (item: ToDoItem) => setTodoList((items) => [...items, item]),
    []
  );
  return (
    <>
      {todoList.map((item) => (
        <Link to={buildDetailPath(item.id)} key={item.id}>
          <ToDoCard item={item} />
        </Link>
      ))}
      <ToDoForm addItem={addItem} />
    </>
  );
};
export default ToDoList;
