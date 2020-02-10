import React, { useContext } from "react";
import { TodoContext } from "../../context";
import RenderIf from "../renderIf";
import List from "./list";

const ListToRender = () => {
  const { todos, todosCompleted, showCompleted } = useContext(TodoContext);

  return (
    <>
      <RenderIf isTrue={!showCompleted}>
        <List list={todos} />
      </RenderIf>
      <RenderIf isTrue={showCompleted}>
        <List list={todosCompleted} isDone />
      </RenderIf>
    </>
  );
};

export default ListToRender;
