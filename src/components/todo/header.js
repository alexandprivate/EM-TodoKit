import React from "react";
import Title from "./title";
import Form from "./form";
import Switcher from "./switcher";
import { TodoContext } from "../../context";

const Header = () => {
  const { theme } = React.useContext(TodoContext);
  return (
    <div className={`header ${theme}`}>
      <Title />
      <Form />
      <Switcher />
    </div>
  );
};

export default Header;
