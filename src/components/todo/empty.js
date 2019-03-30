import React, { Fragment, useContext } from 'react'
import pic from '../../pic.svg'
import { TodoContext } from '../../context'

const Empty = (props) => {
  const { theme } = useContext(TodoContext)
  return (
    <Fragment>
      <img src={pic} alt="" />
      <p className="empty-p" style={{ color: `${theme === 'light' ? '#ccc' : '#666'}` }}>You are anything but lazzy!<br/>Now go and learn react champ!</p>
    </Fragment>
  )
}

export default Empty;