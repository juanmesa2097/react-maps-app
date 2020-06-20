import React, { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import "./App.css";
import MapContainer from "../MapContainer/MapContainer";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="App-col col-12 col-md-6">
            <MapContainer></MapContainer>
          </div>
          <div className="App-col col-12 col-md-6">
            <Toolbar></Toolbar>
          </div>
        </div>
      </div>
    );
  }
}
