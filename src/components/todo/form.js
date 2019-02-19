import React from "react";

const Form = props => (
  <form
    onSubmit={props.onSubmit}
    autoComplete="off"
  >
    <input
      className={props.theme}
      type="text"
      value={props.value}
      onChange={props.onChange}
      id="todoInput"
      placeholder="To-Do Something..."
    />
  </form>
);

export default Form;