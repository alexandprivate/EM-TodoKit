import React, { useContext } from 'react'
import { TodoContext } from '../../context';
import List from './list'

const ListToRender = () => {
  const { todos, todosDone, showingDone, showCompleted } = useContext(TodoContext);
  return (
    <>
      {!showingDone
        ? <List list={todos} />
        : <List list={todosDone} isDone />
      }
      {todosDone.length > 0 &&
        <small onClick={showCompleted} style={{ cursor: 'pointer' }}>
          {showingDone ? 'Hide' : 'Show'} completed
          </small>
      }
    </>
  )
}

export default ListToRender;