import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="card p-3 align-items-center">
      <form className="search">
        <input
          value={props.searchValue}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search Employee..."
        />
      </form>
    </div>
  );
}

export default SearchForm;
