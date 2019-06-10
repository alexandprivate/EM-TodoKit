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
      {/* {todosCompleted.length > 0 &&
        <small onClick={changeLists} style={{ cursor: 'pointer' }}>
          {showCompleted ? 'Hide' : 'Show'} completed
        </small>
      } */}
    </>
  );
};

export default ListToRender;
