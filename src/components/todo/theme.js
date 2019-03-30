import React, { useContext } from 'react'
import { TodoContext } from '../../context'
import version from '../../../package.json'
const iconSun = <i className="icon-sun"></i>;
const iconMoon = <i className="icon-moon"></i>;

const Theme = () => {
  const { theme, changeTheme } = useContext(TodoContext);
  let styles = {
    marginTop: '20px'
  }
  return (
    <>
      <button
        style={styles}
        className={`theme-selector ${theme}`}
        onClick={changeTheme}
      >
        {theme === 'light' ? iconMoon : iconSun} Use {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      <small>V {version.version}</small>
    </>
  )
}

export default Theme;