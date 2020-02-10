import React from "react";

export default ({ children, isTrue }) => (isTrue ? <>{children}</> : null);
