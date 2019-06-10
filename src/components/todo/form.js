import React, { useContext } from "react";
import { TodoContext } from "../../context";

const Form = () => {
  const { theme, addTodo, newTodo, setNewTodo } = useContext(TodoContext);

  return (
    <form onSubmit={addTodo} autoComplete="off">
      <input
        className={theme}
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        autoFocus={true}
        id="todoInput"
        placeholder="Kiss my wife, hug my daughter..."
      />
    </form>
  );
};

export default Form;
