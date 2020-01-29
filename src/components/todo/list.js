import React, { Fragment, useContext } from "react";
import { TodoContext } from "../../context";

const checkIcon = <i className="icon-check"></i>;
const checkIconEmpty = <i className="icon-check-empty"></i>;

const List = props => {
  const { theme, onDone, onUnDone } = useContext(TodoContext);
  return (
    <Fragment>
      {props.list && props.list.length > 0 ? (
        props.list.map((item, index) => (
          <div key={index} className={`list-item ${theme}`}>
            <span className={props.isDone ? "item-done" : ""}>{item}</span>
            <button
              onClick={() => (props.isDone ? onUnDone(index) : onDone(index))}
            >
              {props.isDone ? checkIcon : checkIconEmpty}
            </button>
          </div>
        ))
      ) : (
        <p>No tasks yet</p>
      )}
    </Fragment>
  );
};

export default List;
