import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
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

  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnPickDestination = this.handleOnPickDestination.bind(this);
    this.handleGoToDestination = this.handleGoToDestination.bind(this);
  }

  handleSearchChange(e) {
    console.log(this.props);
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchValue);
  }

  handleOnPickDestination(name) {
    console.log(name);
    this.setState({ searchValue: name });
    this.props.onSearch(name);
  }

  handleGoToDestination() {}

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

                  <div className="d-flex align-items-center justify-content-between">
                    {/* Rating */}
                    {this.props.details.rating ? (
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <h2 className="display-2">
                          {this.props.details.rating}
                        </h2>
                        <Rating
                          size="lg"
                          rating={this.props.details.rating}
                        ></Rating>
                      </div>
                    ) : null}

{/* Pick destination */}
                    <div>
                      <Button
                        variant="primary"
                        onClick={this.handleGoToDestination}
                        size="lg"
                      >
                        <div className="d-flex align-items-center">
                          <i className="im im-location mr-3"></i>
                          Ir al destino indicado
                        </div>
                      </Button>
                    </div>
                  </div>
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
                  onPickDestination={this.handleOnPickDestination}
                ></NearbyPlaces>
              </div>

              {/* Photos */}
              <div className="Details-images">
                {this.props.details.photos?.map((photo, i) => (
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
