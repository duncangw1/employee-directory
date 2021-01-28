import React from "react";
import "./style.css";

function Wrapper({ children }) {
  return <main className="wrapper">{children}</main>;
}

export default Wrapper;
