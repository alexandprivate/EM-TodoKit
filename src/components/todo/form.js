import React, { useContext } from "react";
import { TodoContext } from '../../context'

const Form = () => {
  const { theme, newTodo, addTodo, onChange } = useContext(TodoContext)
  return (
    <form
      onSubmit={addTodo}
      autoComplete="off"
    >
      <input
        className={theme}
        type="text"
        value={newTodo}
        onChange={onChange}
        autoFocus={true}
        id="todoInput"
        placeholder="Let's create a TO-DO..."
      />
    </form>
  )
};

export default Form;