import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="App-col col-12 col-md-6"></div>
          <div className="App-col col-12 col-md-6">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    );
  }
}
