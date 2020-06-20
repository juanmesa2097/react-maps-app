import React, { Component } from "react";
import "./Toolbar.css";

import searchIcon from "../../assets/icons/search-outline.svg";

export default class Toolbar extends Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <div className="Toolbar-search-wrapper">
          <img src={searchIcon} alt="Search icon for search bar" />

          <input
            type="search"
            className="Toolbar-search"
            placeholder="Search for a destination"
          />
        </div>
      </div>
    );
  }
}
