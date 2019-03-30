import React from 'react';
import { TodoProvider } from './context'
import Cover from './components/todo/cover'
import Title from './components/todo/title'
import Form from './components/todo/form'
import ListToRender from './components/todo/listToRender'
import Theme from './components/todo/theme'

const App = () => {
  return (
    <TodoProvider>
      <Cover />
      <Title />
      <Form />
      <ListToRender />
      <Theme />
    </TodoProvider>
  );
}

export default App;
