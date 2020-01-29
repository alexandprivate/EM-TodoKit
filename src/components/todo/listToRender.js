import React, { useContext } from "react";
import { TodoContext } from "../../context";
import List from "./list";

const ListToRender = () => {
  const { todos, todosCompleted, showCompleted } = useContext(TodoContext);
  return (
    <>
      {!showCompleted ? (
        <List list={todos} />
      ) : (
        <List list={todosCompleted} isDone />
      )}
    </>
  );
};

export default ListToRender;
