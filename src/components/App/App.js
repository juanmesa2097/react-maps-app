import React, { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { map: "" };
    this.service = undefined;
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const googleMapsApiLoaded = setInterval(() => {
      if (window.google) {
        clearInterval(googleMapsApiLoaded);

        var sydney = new window.google.maps.LatLng(-33.867, 151.195);

        this.map = new window.google.maps.Map(document.getElementById("map"), {
          center: sydney,
          zoom: 15,
        });

        this.service = new window.google.maps.places.PlacesService(this.map);
      }
    }, 100);
  }

  handleSearch(query) {
    const request = {
      query,
      fields: ["formatted_address", "name", "place_id"],
    };

    this.service.findPlaceFromQuery(request, this.handleMainResult.bind(this));
  }

  handleMainResult(results, status) {
    if (status === "OK") {
      console.log(results);
      results.forEach((r) => {
        const detailsRequest = {
          placeId: r.place_id,
          fields: [
            "name",
            "rating",
            "formatted_phone_number",
            "geometry",
            "photos",
          ],
        };

        this.service.getDetails(
          detailsRequest,
          this.handleDetailsResult.bind(this)
        );
      });
    }
  }

  handleDetailsResult(results, status) {
    if (status === "OK") {
      const lat = results.geometry.location.lat();
      const lng = results.geometry.location.lng();
      this.refreshMapLocation(lat, lng);
      console.log(results);
    }
  }

  refreshMapLocation(lat, lng) {
    this.setState({
      map: new window.google.maps.Map(document.getElementById("map"), {
        center: new window.google.maps.LatLng(lat, lng),
        zoom: 15,
      }),
    });
  }

  render() {
    return (
      <div className="container-fluid pl-0">
        <div className="row align-items-center">
          <div className="App-col col-12 col-md-6">
            <div id="map"></div>
          </div>
          <div className="App-col col-12 col-md-6">
            <Toolbar onSearch={this.handleSearch}></Toolbar>
          </div>
        </div>
      </div>
    );
  }
}
