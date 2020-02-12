import React, { useContext } from "react";
import { TodoContext } from "../../context";
import version from "../../../package.json";

const iconSun = <i className="icon-sun"></i>;
const iconMoon = <i className="icon-moon"></i>;

const Theme = () => {
  const { theme, changeTheme } = useContext(TodoContext);

  return (
    <>
      <button className={`theme-selector ${theme}`} onClick={changeTheme}>
        {theme === "light" ? <>{iconMoon}</> : <>{iconSun}</>}
      </button>
      <small>{version.version}</small>
    </>
  );
};

export default Theme;
