import React, { Fragment, useContext } from 'react'
import { TodoContext } from '../../context'
import Empty from './empty'

const checkIcon = <i className="icon-check"></i>;
const checkIconEmpty = <i className="icon-check-empty"></i>;
const messages = ['Your list of pending TO-DOs is empty.', 'Your list of donde TO-DOs is empty.']

const List = props => {
  const { theme, onDone, onUnDone } = useContext(TodoContext)
  return (
    <Fragment>
      {(props.list && props.list.length > 0)
        ? props.list.map((item, index) =>
          <div key={index} className={`list-item ${theme}`}>
            <span className={props.isDone ? 'item-done' : ''}>{item}</span>
            <button
              onClick={() => props.isDone ? onUnDone(index) : onDone(index)}
            >
              {props.isDone ? checkIcon : checkIconEmpty}
            </button>
          </div>
        )
        : <Empty message={!props.isDone ? messages[0] : messages[1]} />
      }
    </Fragment>
  )
}

export default List;