import React, { Component } from "react";
import { Modal, Card, Button } from "react-bootstrap";
import "./DetailsReviews.css";
export default class DetailsReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });

  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Mostrar comentarios
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Comentarios</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.reviews.map((author, i) => (
              <div className="mb-5">
                <Card key={i} border="light">
                  <Card.Header>
                    <div className="d-flex align-items-center">
                      <img
                        src={author.profile_photo_url}
                        alt="Reviewer profile"
                        className="author-image"
                      />
                      <h2 className="h5 ml-4">{author.author_name}</h2>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div>{author.rating}</div>
                    <Card.Text>
                      <p>{author.text}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
