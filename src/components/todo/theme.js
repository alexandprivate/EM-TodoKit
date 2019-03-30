import React, { useContext } from 'react'
import { TodoContext } from '../../context'
const iconSun = <i className="icon-sun"></i>;
const iconMoon = <i className="icon-moon"></i>;

const Theme = () => {
  const { showingDone, todosDone, theme, setTheme } = useContext(TodoContext);
  return (
    <>
      <button
        style={{ marginTop: `${(showingDone || (!showingDone && todosDone.length === 0)) ? '20px' : '0px'}` }}
        className={`theme-selector ${theme}`}
        onClick={setTheme}>
        {theme === 'light' ? iconMoon : iconSun} Use {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </>
  )
}

export default Theme;