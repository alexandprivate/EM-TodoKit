import React, { Fragment, useContext } from 'react'
import { TodoContext } from '../../context'
import Empty from './empty'

const checkIcon = <i className="icon-check"></i>;

const List = props => {
  const { theme, onDone } = useContext(TodoContext)
  return (
    <Fragment>
      {(props.list && props.list.length > 0)
        ? props.list.map((item, index) =>
          <div key={index} className={`list-item ${theme}`}>
            <span className={props.isDone ? 'item-done' : ''}>{item}</span>
            {!props.isDone &&
              <button onClick={() => onDone(index)}>{checkIcon}</button>
            }
          </div>
        )
        : <Empty />
      }
    </Fragment>
  )
}

export default List;