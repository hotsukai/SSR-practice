import { ToDoItem } from "app";
import React, { useCallback, useState, VFC } from "react";
import ToDoCard from "./ToDoCard";
import ToDoForm from "./ToDoForm";

const ToDoList: VFC = () => {
  const [todoList, setTodoList] = useState<ToDoItem[]>([]);
  const addItem = useCallback(
    (item: ToDoItem) => setTodoList((items) => [...items, item]),
    []
  );
  return (
    <>
      {todoList.map((item) => (
        <ToDoCard item={item} key={item.title} />
      ))}
      <ToDoForm addItem={addItem} />
    </>
  );
};
export default ToDoList;
