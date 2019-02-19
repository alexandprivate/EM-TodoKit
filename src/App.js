import React, { Component, Fragment } from 'react';
import List from './components/todo/list'
import Form from './components/todo/form'
import Title from './components/todo/title'
import Empty from './components/todo/empty'
import Theme from './components/todo/theme'
// import Cathegories from './components/todo/cathegories'

class App extends Component {
  state = {
    todos: [],
    todosDone: [],
    newTodo: '',
    theme: 'light',
    showingDone: false
  };
  componentDidMount = async () => {
    this.focus();
    let todos = localStorage.getItem('emtk');
    let theme = localStorage.getItem('emtk-theme');
    let todosDone = localStorage.getItem('emtkd')
    if (todos !== null) {
      await this.setState({ todos: JSON.parse(todos) })
    }
    if (todosDone !== null) {
      await this.setState({ todosDone: JSON.parse(todosDone) })
    }
    if (theme !== null) {
      this.setState({
        theme
      })
    }
    this.todosToRender();
  };

  render() {
    const { todos, newTodo, theme, todosDone, showingDone } = this.state;
    return (
      <Fragment>
        <Title />
        <Form
          value={newTodo}
          onChange={this.onChange}
          onSubmit={this.addTodo}
          theme={theme}
        />
        {/* <Cathegories /> */}
        {todos.length > 0
          ? <List
            items={todos}
            onDone={this.onDone}
            theme={theme}
          />
          : <Empty theme={theme} />
        }
        {todosDone.length > 0 &&
          <>
            <span
              style={{ marginTop: `${todos.length > 0 ? '20px' : '0px'}` }}
              className="show-dond-pending"
              onClick={this.showCompleted}>
              {showingDone ? 'Hide' : 'Show'} completed To-Dos
            </span>
            {showingDone &&
              <List
                items={todosDone}
                onDone={this.onDone}
                theme={theme}
                isDone={showingDone}
              />
            }
          </>
        }
        <Theme
          theme={theme}
          setTheme={this.setTheme}
          showingDone={showingDone}
        />
        <span className={`bg-cover ${theme}`}></span>
      </Fragment>
    );
  }

  // logic
  showCompleted = () => {
    this.setState({ showingDone: !this.state.showingDone })
  }
  todosToRender = () => {
    if (this.state.showingDone) {
      return this.state.todosDone
    } else { return this.state.todos }
  }
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
      newTodo: "",
      showingDone: false,
    });
    localStorage.setItem('emtk', JSON.stringify(this.state.todos))
  };
  onDone = async todo => {
    let { todos } = this.state;
    let newDone = todos[todo];
    todos.splice(todo, 1);
    await this.setState({
      todos,
      todosDone: [newDone, ...this.state.todosDone]
    });
    localStorage.setItem('emtk', JSON.stringify(this.state.todos));
    localStorage.setItem('emtkd', JSON.stringify(this.state.todosDone))
  };
}

export default App;
