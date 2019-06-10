import React from "react";
import { TodoContext } from "../../context";

const Button = ({ label, btnClass, onClick }) => (
  <button className={`${btnClass}`} onClick={onClick}>
    {label}
  </button>
);

const Switcher = () => {
  const { changeLists, theme, showCompleted } = React.useContext(TodoContext);
  return (
    <div className="switcher">
      <Button
        btnClass={`${!showCompleted ? "active" : "inactive"} ${theme}`}
        label="My Tasks"
        onClick={changeLists}
      />
      <Button
        btnClass={`${showCompleted ? "active" : "inactive"} ${theme}`}
        label="Done Tasks"
        onClick={changeLists}
      />
    </div>
  );
};

export default Switcher;
