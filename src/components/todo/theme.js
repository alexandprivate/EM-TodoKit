import React from 'react'
const iconSun = <i className="icon-sun"></i>;
const iconMoon = <i className="icon-moon"></i>;

const Theme = props => (
  <>
    <button
      style={{marginTop: `${(props.showingDone || (!props.showingDone && props.todosDone.length === 0)) ? '20px': '0px'}`}}
      className={`theme-selector ${props.theme}`}
      onClick={props.setTheme}>
      {props.theme === 'light' ? iconMoon : iconSun} {props.theme === 'light' ? 'Dark' : 'Light'} theme
    </button>
  </>
)

export default Theme;