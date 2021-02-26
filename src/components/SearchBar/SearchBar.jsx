import React, { Component, useState } from "react";
const SearchBar = () => {
  const [term, setTerm] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(term);
  };
  
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(evt) => setTerm(evt.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
