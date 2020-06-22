import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default class DetailsReviews extends Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Mostrar comentarios
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>comments</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
