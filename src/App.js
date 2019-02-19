import React, { Component, Fragment } from 'react';
import List from './components/todo/list'
import Form from './components/todo/form'
import Title from './components/todo/title'
import Empty from './components/todo/empty'
import Theme from './components/todo/theme'

class App extends Component {
  state = {
    todos: [],
    newTodo: '',
    theme: 'light'
  };
  componentDidMount = () => {
    this.focus();
    let todos = localStorage.getItem('emtk');
    let theme = localStorage.getItem('emtk-theme');
    if (todos !== null) {
      this.setState({ todos: JSON.parse(todos) })
    }
    if (theme !== null) {
      this.setState({
        theme
      })
    }
  };

  render() {
    const { todos, newTodo, theme } = this.state;
    return (
      <Fragment>
        <Title />
        <Form
          value={newTodo}
          onChange={this.onChange}
          onSubmit={this.addTodo}
          theme={theme}
        />
        {todos.length > 0
          ? <List
          items={todos}
          onDone={this.onDone}
          theme={theme}
          />
          : <Empty theme={theme} />
        }
        <Theme theme={theme} setTheme={this.setTheme} />
        <span className={`bg-cover ${theme}`}></span>
      </Fragment>
    );
  }

  // logic
  setTheme = async () => {
    if (this.state.theme === 'light') {
      await this.setState({
        theme: 'dark'
      })
    } else {
      await this.setState({
        theme: 'light'
      })
    }
    localStorage.setItem('emtk-theme', this.state.theme)
  }
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
