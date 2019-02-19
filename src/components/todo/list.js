import React, { Fragment } from 'react'

const checkIcon = <i className="icon-check"></i>;

const List = props => (
  <Fragment>
    {props.items.map((item, index) =>
      <div key={index} className={`list-item ${props.theme}`}>
        <span className={props.isDone ? 'item-done' : ''}>{item}</span>
        {!props.isDone &&
          <button onClick={() => props.onDone(index)}>{checkIcon}</button>
        }
      </div>
    )}
  </Fragment>
)

export default List;