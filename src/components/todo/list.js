import React, { useContext } from "react";
import RenderIf from "../renderIf";
import { TodoContext } from "../../context";

const checkIcon = <i className="icon-check"></i>;
const checkIconEmpty = <i className="icon-check-empty"></i>;

const List = props => {
  const { theme, onDone, onUnDone } = useContext(TodoContext);
  let { list = [], isDone = false } = props;
  let hasItems = list.length > 0;
  return (
    <>
      <RenderIf isTrue={hasItems}>
        {list.map((item, index) => (
          <div key={index} className={`list-item ${theme}`}>
            <span className={isDone ? "item-done" : ""}>{item}</span>
            <button onClick={() => (isDone ? onUnDone(index) : onDone(index))}>
              <RenderIf isTrue={isDone}>{checkIcon}</RenderIf>
              <RenderIf isTrue={!isDone}>{checkIconEmpty}</RenderIf>
            </button>
          </div>
        ))}
      </RenderIf>
      <RenderIf isTrue={!hasItems}>
        <p>No tasks yet</p>
      </RenderIf>
    </>
  );
};

export default List;
