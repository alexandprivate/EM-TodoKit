import React, { useContext } from "react";
import { TodoContext } from "../../context";
import version from "../../../package.json";

const iconSun = <i className="icon-sun"></i>;
const iconMoon = <i className="icon-moon"></i>;

const Theme = () => {
  const { theme, changeTheme } = useContext(TodoContext);
  let styles = {
    marginTop: 20,
    height: 36
  };
  return (
    <>
      <button
        style={styles}
        className={`theme-selector ${theme}`}
        onClick={changeTheme}
      >
        {theme === "light" ? <>{iconMoon}</> : <>{iconSun}</>}
      </button>
      <small>{version.version}</small>
    </>
  );
};

export default Theme;
