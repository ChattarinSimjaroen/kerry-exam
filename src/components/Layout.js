import * as React from "react";

const Layout = ({ zIndex, element }) => {
  return <div style={{ zIndex, position: "relative" }}>{element}</div>;
};

export default Layout;