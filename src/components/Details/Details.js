import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import DetailsImage from "../DetailsImage/DetailsImage";
import DetailsOpeningHours from "../DetailsOpeningHours/DetailsOpeningHours";
import DetailsReviews from "../DetailsReviews/DetailsReviews";
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
            <div className="col-12">
              {/* Basic info */}
              <div className="row mb-5">
                <div className="col-12">
                  <h1 className="h2">{this.props.details.name}</h1>
                  <div>{this.props.details.formatted_address}</div>
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
              {this.props.details.reviews.length > 0 ? (
                <div className="mb-5">
                  <DetailsReviews
                    reviews={this.props.details.reviews}
                  ></DetailsReviews>
                </div>
              ) : null}

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
