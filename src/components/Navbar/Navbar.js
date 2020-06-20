import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            Paseandoando
          </a>
        </div>

        <div
          className="navbar-start"
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          hola
        </div>
      </nav>
    );
  }
}
