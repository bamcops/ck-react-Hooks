import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ lista }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={lista.posterUrl} />
        <Card.Body>
          <Card.Title>{lista.title}</Card.Title>
          <Card.Text>description : {lista.description} </Card.Text>
          <Card.Text>Rate :{lista.rate} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
