import React, { Fragment, useContext } from 'react'
import pic from '../../pic.svg'
import { TodoContext } from '../../context'

const Empty = (props) => {
  const { theme } = useContext(TodoContext)
  return (
    <Fragment>
      <img src={pic} alt="" />
      <p className="empty-p" style={{ color: `${theme === 'light' ? '#ccc' : '#666'}` }}>{props.message}</p>
    </Fragment>
  )
}

export default Empty;