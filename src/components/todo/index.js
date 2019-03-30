import React from 'react'
import ListToRender from './list'
import Form from './form'
import Title from './title'

const Todo = () => {
  return (
    <>
      <Title />
      <Form />
      <ListToRender />
    </>
  )
}

export default Todo;