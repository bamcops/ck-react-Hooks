import React, { useState } from "react";
import { MovieData } from "../constant/Data";
import MovieCard from "./MovieCard";
import Add from "./Add";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
const MovieList = ({ input }) => { 
  let navigate=useNavigate
  const [movie, setMovie] = useState(MovieData);
  const addMovie = (newMovie) => {
    setMovie([...movie, newMovie]);
  };
  return (
    <>
      <Add addmovie={addMovie} />
      <div className="liste">
        {movie
          .filter(
            (el) =>
              el.title.toUpperCase().includes(input.toUpperCase()) ||
              el.rate >= input
          )
          .map((film) => (
            <MovieCard lista={film} />
          ))}
      </div>
      <Button>onClick={() => navigate(-1)}Retour</Button>
    </>
  );
};

export default MovieList;
