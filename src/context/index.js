import React, { Component } from 'react'

let TodoContext;
const { Provider, Consumer } = TodoContext = React.createContext();

class TodoProvider extends Component {

  state = {
    todos: [],
    todosDone: [],
    newTodo: '',
    theme: 'light',
    showingDone: false,
  }

  componentDidMount = () => {
    let todos = localStorage.getItem('emtk');
    let theme = localStorage.getItem('emtk-theme');
    let todosDone = localStorage.getItem('emtkd')
    this.setState({
      todos: todos !== null ? JSON.parse(todos) : [],
      todosDone: todosDone !== null ? JSON.parse(todosDone) : [],
      theme: theme !== null ? theme : 'dark'
    })
    this.todosToRender();
  }

  render() {

    return (
      <div>
        <Provider value={{
          ...this.state,
          showCompleted: this.showCompleted,
          todosToRender: this.todosToRender,
          setTheme: this.setTheme,
          onChange: this.onChange,
          addTodo: this.addTodo,
          onDone: this.onDone,
          onUnDone: this.onUnDone,
        }}>
          {this.props.children}
        </Provider>
      </div>
    )
  }

  showCompleted = () => {
    this.setState({ showingDone: !this.state.showingDone })
  }

  todosToRender = () => {
    return this.state.showingDone
      ? this.state.todosDone
      : this.state.todos
  }

  setTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === 'light' ? 'dark' : 'light'
    }, () => {
      localStorage.setItem('emtk-theme', this.state.theme)
    })
  }

  onChange = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [this.state.newTodo, ...this.state.todos],
      newTodo: "",
      showingDone: false,
    }, () => {
      localStorage.setItem('emtk', JSON.stringify(this.state.todos))
    });
    if (this.state.newTodo.trim() === "") return;
  }

  onDone = todo => {
    let { todos } = this.state;
    let newDone = todos[todo];
    todos.splice(todo, 1);
    this.setState({
      todos,
      todosDone: [newDone, ...this.state.todosDone]
    }, () => {
      localStorage.setItem('emtk', JSON.stringify(this.state.todos));
      localStorage.setItem('emtkd', JSON.stringify(this.state.todosDone))
    });
  }

  onUnDone = todo => {
    let { todosDone } = this.state; 
    let newDone = todosDone[todo]
    todosDone.splice(todo, 1);
    this.setState({
      todos: [newDone, ...this.state.todos],
      todosDone,
    }, () => {
      localStorage.setItem('emtk', JSON.stringify(this.state.todos));
      localStorage.setItem('emtkd', JSON.stringify(this.state.todosDone))
    });
  }

}

export { TodoProvider, Consumer as TodoConsumer, TodoContext };