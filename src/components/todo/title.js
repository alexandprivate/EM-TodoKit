import React from "react";
import version from '../../../package.json'
const todoIcon = <i className="icon-check"></i>;

const Title = () => (
  <>
    <h1>
      {todoIcon}<span>to-do</span> kit
    </h1>
    <small>{version.version}</small>
  </>
);

export default Title;