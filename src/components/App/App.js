import React, { Component } from "react";
import Details from "../Details/Details";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: undefined,
    };
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
            "formatted_address",
            "geometry",
            "photos",
            "reviews",
            "opening_hours",
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
      this.setState({
        details: results,
      });
      console.log(results);
      this.refreshMapLocation();
    }
  }

  refreshMapLocation(lat, lng) {
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: new window.google.maps.LatLng(
        this.state.details.geometry.location.lat(),
        this.state.details.geometry.location.lng()
      ),
      zoom: 15,
    });
  }

  render() {
    return (
      <div className="h-100 container-fluid pl-0">
        <div className="h-100 row align-items-center">
          <div className="h-100 col-12 col-md-6">
            <div id="map"></div>
          </div>
          <div className="App-details col-12 col-md-6">
            <Details
              details={this.state.details}
              onSearch={this.handleSearch}
            ></Details>
          </div>
        </div>
      </div>
    );
  }
}
