import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function Art(props) {
  return (
    <Card style={{ width: "17rem", height: "30rem" }}>
      <Card.Img className="card-image" variant="top" src={props.eventImage} />
      <Card.Body>
        <Card.Title>{props.eventTitle}</Card.Title>
        <Card.Text>{props.eventDescription}</Card.Text>
        <Button
          style={{ margin: "1em" }}
          href={props.eventURL}
          className="btn btn-secondary"
          variant="primary"
          target="_blank"
        >
          See Event
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Art;
