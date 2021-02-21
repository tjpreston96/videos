import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (evt) => {
    this.setState({ term: evt.target.value });
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();

    // TODO: make sure we call callback from parent component

  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
