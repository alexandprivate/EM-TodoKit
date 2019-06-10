import React, { useState, useEffect } from "react";

let TodoContext;
const { Provider, Consumer } = (TodoContext = React.createContext());

const TodoProvider = props => {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodo] = useState([]);
  const [todosCompleted, setTodoCompleted] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div>
      <Provider
        value={{
          theme,
          todos,
          setTodo,
          todosCompleted,
          setTodoCompleted,
          newTodo,
          setNewTodo,
          addTodo,
          showCompleted,
          changeLists,
          changeTheme,
          onDone,
          onUnDone
        }}
      >
        {props.children}
      </Provider>
    </div>
  );

  function onLoad() {
    let localtheme = localStorage.getItem("emtk-theme");
    let localtodos = localStorage.getItem("emtk");
    let localTodosCompleted = localStorage.getItem("emtkd");
    setTodo(localtodos !== null ? JSON.parse(localtodos) : todos);
    setTodoCompleted(
      localTodosCompleted !== null
        ? JSON.parse(localTodosCompleted)
        : todosCompleted
    );
    setTheme(localtheme !== null ? localtheme : theme);
  }

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("emtk-theme", theme === "light" ? "dark" : "light");
  }

  function changeLists() {
    setShowCompleted(!showCompleted);
  }

  function addTodo(e) {
    e.preventDefault();
    let newlist = [newTodo, ...todos];
    setTodo(newlist);
    setNewTodo("");
    localStorage.setItem("emtk", JSON.stringify(newlist));
  }

  function onDone(index) {
    let newDone = todos[index];
    todos.splice(index, 1);
    setTodo(todos);
    setTodoCompleted([newDone, ...todosCompleted]);
    localStorage.setItem("emtk", JSON.stringify(todos));
    localStorage.setItem("emtkd", JSON.stringify(todosCompleted));
  }

  function onUnDone(index) {
    let newDone = todosCompleted[index];
    todosCompleted.splice(index, 1);
    setTodo([newDone, ...todos]);
    setTodoCompleted(todosCompleted);
    localStorage.setItem("emtk", JSON.stringify(todos));
    localStorage.setItem("emtkd", JSON.stringify(todosCompleted));
  }
};

export { TodoProvider, Consumer as TodoConsumer, TodoContext };
