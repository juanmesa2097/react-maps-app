import React, { Component } from "react";
import "./Toolbar.css";

import searchIcon from "../../assets/icons/search-outline.svg";

export default class Toolbar extends Component {
  state = {
    searchValue: "",
  };

  constructor() {
    super();
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchValue);
  }

  render() {
    return (
      <div className="d-flex align-items-center">
        <div className="Toolbar-search-wrapper">
          <img src={searchIcon} alt="Search icon for search bar" />

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="Toolbar-search"
              placeholder="Search for a destination"
              value={this.state.searchValue}
              onChange={this.handleSearchChange}
            />
          </form>
        </div>
      </div>
    );
  }
}
