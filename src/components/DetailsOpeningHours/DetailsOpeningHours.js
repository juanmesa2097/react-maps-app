import React, { Component } from "react";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";
import "./DetailsOpeningHours.css";

export default class DetailsOpeningHours extends Component {
  render() {
    console.log(this.props);
    return (
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <div className="d-flex justify-content-between">
                <span>Ver horarios de apertura</span>
                <span>{this.props.isOpen}</span>
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup>
                {this.props.openingHours.map((oh, i) => (
                  <ListGroup.Item key={i}>{oh}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
