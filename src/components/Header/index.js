import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron">
      <h1>Employee Directory</h1>
      <p>
        Click on carrots to filter by heading or use the search box to narrow
        your results.
      </p>
    </div>
  );
}

export default Header;
