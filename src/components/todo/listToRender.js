import React, { useContext } from 'react'
import { TodoContext } from '../../context';
import List from './list'

const ListToRender = () => {
  const { todos, todosDone, showingDone } = useContext(TodoContext);
  return (
    <>
      {!showingDone
        ? <List list={todos} />
        : <List list={todosDone} />
      }
    </>
  )
}

export default ListToRender;