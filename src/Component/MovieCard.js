
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      {/* <Link to={`/trailer/${lista.id}`}><Button>Trailer</Button></Link> */}
    </div>
  );
};

export default MovieCard;
