import React, { Fragment } from 'react'

const checkIcon = <i className="material-icons">check_circle_outline</i>;

const List = props => (
  <Fragment>
    {props.items.map((item, index) =>
      <div key={index} className="list-item">
        <span>{item}</span>
        <button onClick={props.onDone}>{checkIcon}</button>
      </div>
    )}
  </Fragment>
)

export default List;