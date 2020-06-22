import React, { Component } from "react";
import { Modal, Card, Button } from "react-bootstrap";
import Rating from "../Rating/Rating";
import "./NearbyPlaces.css";

export default class NearbyPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      nearbyPlaces: [],
    };

    this.handleShow = this.handleShow.bind(this);
  }

  handleClose = () => this.setState({ show: false });

  handleShow() {
    const service = new window.google.maps.places.PlacesService(this.props.map);

    const currentLocation = {
      lat: this.props.location.lat(),
      lng: this.props.location.lng(),
    };

    const request = {
      location: currentLocation,
      radius: 500,
    };

    service.nearbySearch(request, (results, status) => {
      console.log(results, status);
      if (status === "OK") {
        this.setState({ nearbyPlaces: results });
      }
    });

    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow} size="lg">
          Buscar lugares cercanos
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Lugares cercanos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.nearbyPlaces
              .slice(1, this.state.nearbyPlaces.length)
              .map((nearbyPlace, i) => (
                <div key={i} className="mb-5">
                  <Card>
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h2 className="h4">{nearbyPlace.name}</h2>
                          <div className="d-flex">
                            <Rating rating={nearbyPlace.rating}></Rating>
                            <span className="ml-2">
                              ({nearbyPlace.user_ratings_total})
                            </span>
                          </div>
                          <address className="mb-4 text-secondary">
                            {nearbyPlace.vicinity}
                          </address>
                          <ul className="text-secondary">
                            {nearbyPlace.types.map((type, i) => (
                              <li key={i}>{type}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="nearby-place-image-wrapper">
                          {nearbyPlace.photos ? (
                            <img
                              src={nearbyPlace.photos[0].getUrl()}
                              alt={`${nearbyPlace.name} place`}
                            />
                          ) : (
                            <p className="no-photo">Sin foto</p>
                          )}
                        </div>
                      </div>
                      <Button variant="primary">
                        Seleccionar como destino
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose} size="lg">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
