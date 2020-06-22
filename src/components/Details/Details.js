import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import DetailsImage from "../DetailsImage/DetailsImage";
import DetailsOpeningHours from "../DetailsOpeningHours/DetailsOpeningHours";
import DetailsReviews from "../DetailsReviews/DetailsReviews";
import Rating from "../Rating/Rating";
import NearbyPlaces from "../NearbyPlaces/NearbyPlaces";
import "./Details.css";

export default class Details extends Component {
  state = {
    searchValue: "",
  };

  constructor() {
    super();
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(e) {
    console.log(this.props);
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchValue);
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Search form */}
        <div className="row mb-5">
          <form className="w-100" onSubmit={this.handleSubmit}>
            <InputGroup size="lg">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Search for a destination"
                value={this.state.searchValue}
                onChange={this.handleSearchChange}
              />
            </InputGroup>
          </form>
        </div>

        {/* Details */}
        {this.props.details ? (
          <div className="row">
            <div className="col-12 p-0">
              <div className="row mb-5">
                <div className="col-12">
                  {/* Basic info */}
                  <h1>{this.props.details.name}</h1>
                  <div className="text-secondary mb-5">
                    {this.props.details.formatted_address}
                  </div>

                  {/* Rating */}
                  {this.props.details.rating ? (
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <h2 className="display-2">
                          {this.props.details.rating}
                        </h2>
                        <Rating
                          size="lg"
                          rating={this.props.details.rating}
                        ></Rating>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Opening hours */}
              {this.props.details.opening_hours ? (
                <div className="mb-5">
                  <DetailsOpeningHours
                    isOpen={this.props.details.opening_hours.isOpen()}
                    openingHours={this.props.details.opening_hours.weekday_text}
                  ></DetailsOpeningHours>
                </div>
              ) : null}

              {/* Reviews */}
              {this.props.details.reviews?.length > 0 ? (
                <div className="mb-5">
                  <DetailsReviews
                    reviews={this.props.details.reviews}
                  ></DetailsReviews>
                </div>
              ) : null}

              {/* Nearby places */}
              <div className="mb-5">
                <NearbyPlaces
                  location={this.props.details.geometry.location}
                  map={this.props.map}
                ></NearbyPlaces>
              </div>

              {/* Photos */}
              <div className="Details-images">
                {this.props.details.photos.map((photo, i) => (
                  <DetailsImage key={i} url={photo.getUrl()}></DetailsImage>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>No se ha efectuado la búsqueda</div>
        )}
      </div>
    );
  }
}
