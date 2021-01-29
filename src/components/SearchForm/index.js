import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="card p-3 align-items-center">
      <form className="search">
        <input
          id="searchbox"
          type="search"
          className="form-control"
          {...props}
        />
      </form>
    </div>
  );
}

export default SearchForm;
