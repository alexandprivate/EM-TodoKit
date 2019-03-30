import React, { useContext } from 'react'
import { TodoContext } from '../../context';

const Cover = (props) => {
  const { theme } = useContext(TodoContext);
  return (
    <div className={`bg-cover ${theme}`}>
      {props.children}
    </div>
  )
}

export default Cover;