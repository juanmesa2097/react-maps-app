import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./DetailsOpeningHours.css";

export default class DetailsOpeningHours extends Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Ver horarios de apertura
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
