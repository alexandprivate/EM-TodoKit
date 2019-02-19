import React from 'react'

const Cathegories = props => (
  <div className="cathegories">
    <span>{props.currentCathegory}</span>
    <button>{props.cathegories}</button>
    {props.showCathegories &&
      <div>
      
      </div>
    }
  </div>
)

export default Cathegories;