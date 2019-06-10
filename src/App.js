import React from "react";
import { TodoProvider } from "./context";
import Cover from "./components/todo/cover";
import Header from "./components/todo/header";
import ListToRender from "./components/todo/listToRender";
import Theme from "./components/todo/theme";

const App = () => {
  return (
    <TodoProvider>
      <Cover />
      <Header />
      <ListToRender />
      <Theme />
    </TodoProvider>
  );
};

export default App;
