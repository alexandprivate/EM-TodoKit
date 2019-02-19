import React, { Fragment } from 'react'

const checkIcon = <i className="icon-check"></i>;

const List = props => (
  <Fragment>
    {props.items.map((item, index) =>
      <div key={index} className={`list-item ${props.theme}`}>
        <span>{item}</span>
        <button onClick={props.onDone}>{checkIcon}</button>
      </div>
    )}
  </Fragment>
)

export default List;