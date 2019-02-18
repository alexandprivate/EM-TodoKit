import React from "react";

const Form = props => (
  <form
    onSubmit={props.onSubmit}
    autoComplete="off"
  >
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      id="todoInput"
      placeholder="TODO something..."
    />
  </form>
);

export default Form;