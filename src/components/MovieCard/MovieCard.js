import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.photo} />
        <Card.Body>
          <Card.Title>{movie.firstName}</Card.Title>
          <Card.Text>{movie.lastName}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
