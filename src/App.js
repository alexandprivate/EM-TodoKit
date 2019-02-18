import React, { Component, Fragment } from 'react';
import List from './components/todo/list'
import Form from './components/todo/form'
import Title from './components/todo/title'
import Empty from './components/todo/empty'

class App extends Component {
  state = {
    todos: [],
    newTodo: '',
  };
  componentDidMount = () => {
    this.focus();
    let todos = localStorage.getItem('emtk');
    if (todos !== null) {
      this.setState({ todos: JSON.parse(todos) })
    }
    console.log(todos)
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <Fragment>
        <Title />
        <Form
          value={newTodo}
          onChange={this.onChange}
          onSubmit={this.addTodo}
        />
        {todos.length > 0
          ? <List
            items={todos}
            onDone={this.onDone}
          />
          : <Empty />
        }
      </Fragment>
    );
  }

  // logic
  focus = () => {
    let input = document.getElementById("todoInput");
    input.focus();
  };
  onChange = e => {
    this.setState({
      newTodo: e.target.value
    });
  };
  addTodo = async e => {
    e.preventDefault();
    if (this.state.newTodo.trim() === "") return;
    await this.setState({
      todos: [this.state.newTodo, ...this.state.todos],
      newTodo: ""
    });
    localStorage.setItem('emtk', JSON.stringify(this.state.todos))
  };
  onDone = async todo => {
    let { todos } = this.state;
    todos.splice(todo, 1);
    this.setState({
      todos
    });
    localStorage.setItem('emtk', JSON.stringify(this.state.todos))
  };
}

export default App;
