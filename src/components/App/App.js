import React, { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import "./App.css";
import MapContainer from "../MapContainer/MapContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.inputSearchRef = React.createRef();
  }

  async handleSearch(e) {
    console.log(e);

    const service = window.google.maps.places.PlacesService;
    //  service.find
  }

  render() {
    return (
      <div className="container-fluid pl-0">
        <div className="row align-items-center">
          <div className="App-col col-12 col-md-6">
            <MapContainer></MapContainer>
          </div>
          <div className="App-col col-12 col-md-6">
            <Toolbar onSearch={this.handleSearch}></Toolbar>
          </div>
        </div>
      </div>
    );
  }
}
